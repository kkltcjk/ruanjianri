import logging
import random
import sys

from flask import Flask
from flask import request
from flask import jsonify
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text

LOG = logging.getLogger(__name__)
LOG.setLevel(logging.DEBUG)


engine = create_engine('sqlite:////tmp/yardstick.db', convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()

class Tests(Base):
    __tablename__ = 'tests'
    id = Column(Integer, primary_key=True)
    question_id = Column(Integer)
    question = Column(Text)
    sectionnum = Column(Integer)
    rightanswer = Column(Integer)
    answerA = Column(Text)
    answerB = Column(Text)
    answerC = Column(Text)
    answerD = Column(Text)


class Scores(Base):
    __tablename__ = 'scores'
    id = Column(Integer, primary_key=True)
    user_id = Column(Text)
    total = Column(Integer)
    right = Column(Integer)
    wrong = Column(Integer)
    questions = Column(Text)


Base.metadata.create_all(bind=engine)

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

@app.teardown_request
def shutdown_session(exception=None):
    db_session.remove()

@app.route('/api/test/<user_id>', methods=['GET'])
def get_test(user_id):
    score = Scores.query.filter_by(user_id=user_id).first()
    if not score:
        question_id = random.randint(1, 6)
        question = Tests.query.filter_by(question_id=question_id).first()
    else:
        questions = score.questions.split(',')
        questions = [int(i) for i in questions]
        question_id = random.randint(1, 6)

        while question_id in questions:
            question_id = random.randint(1, 6)

        question = Tests.query.filter_by(question_id=question_id).first()

    return jsonify({'question': change_obj_to_dict(question)})


@app.route('/api/test', methods=['POST'])
def post_test():
    data = request.json if request.json else {}

    for k, v in data.items():
        if isinstance(v, unicode):
            data[k] = v.encode('raw_unicode_escape')

    try:
        question = Tests(**data)
        db_session.add(question)
        db_session.commit()
    except Exception as e:
        return jsonify({'status': 1})

    return jsonify({'status': 0})


@app.route('/api/score', methods=['POST'])
def post_score():
    data = request.json if request.json else {}
    user_id = data.get('user_id')
    is_right = data.get('is_right')
    question_id = data.get('question_id')
    score = Scores.query.filter_by(user_id=user_id).first()
    if not score:
        score = Scores(user_id=user_id, total=1, right=is_right, wrong=1 - is_right, questions=str(question_id))
        db_session.add(score)
        db_session.commit()
    else:
        questions = score.questions.split(',')
        if str(question_id) in questions:
            return jsonify({'status': 1})

        score.total += 1
        score.right += is_right
        score.wrong = score.total - score.right
        questions.append(str(question_id))
        score.questions = ','.join(questions)
        db_session.commit()
    return jsonify({'status': 0})


@app.route('/api/score/<user_id>', methods=['GET'])
def get_score(user_id):
    score = Scores.query.filter_by(user_id=user_id).first()

    if not score:
        return jsonify({'total': 0, 'right': 0, 'wrong': 0})

    return jsonify(change_obj_to_dict(score))


def change_obj_to_dict(obj):
    dic = {}
    for k, v in vars(obj).items():
        try:
            vars(v)
        except TypeError:
            dic.update({k: v})
    return dic
