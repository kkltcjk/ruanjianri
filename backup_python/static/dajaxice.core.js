
var Dajaxice = {

    
    

    

    
    dayi: {
    

    
    
    
        notice: {
    
    test: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.notice.test', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        resource: {
    
    sync_resource_log: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.resource.sync_resource_log', 'POST', callback_function, argv, custom_settings);
    },

    favourite_resource: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.resource.favourite_resource', 'POST', callback_function, argv, custom_settings);
    },

    download_resource: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.resource.download_resource', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        school: {
    
    get_filter_schools: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.school.get_filter_schools', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        wxapi: {
    
    get_share_signature: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.wxapi.get_share_signature', 'POST', callback_function, argv, custom_settings);
    },

    get_head_img: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.wxapi.get_head_img', 'POST', callback_function, argv, custom_settings);
    },

    get_head_img2: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.wxapi.get_head_img2', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        mobile: {
    
    getVerificationCode: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.mobile.getVerificationCode', 'POST', callback_function, argv, custom_settings);
    },

    verification_student_phone: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.mobile.verification_student_phone', 'POST', callback_function, argv, custom_settings);
    },

    verificationCode: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.mobile.verificationCode', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        question: {
    
    get_more_questions: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.get_more_questions', 'POST', callback_function, argv, custom_settings);
    },

    workbench_get_new_questions: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.workbench_get_new_questions', 'POST', callback_function, argv, custom_settings);
    },

    get_more_teacher_questions: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.get_more_teacher_questions', 'POST', callback_function, argv, custom_settings);
    },

    response_evaluation: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.response_evaluation', 'POST', callback_function, argv, custom_settings);
    },

    release_reask: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.release_reask', 'POST', callback_function, argv, custom_settings);
    },

    get_questions_status: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.get_questions_status', 'POST', callback_function, argv, custom_settings);
    },

    student_collect_question: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.student_collect_question', 'POST', callback_function, argv, custom_settings);
    },

    refuse_question_new: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.refuse_question_new', 'POST', callback_function, argv, custom_settings);
    },

    pRotate: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.pRotate', 'POST', callback_function, argv, custom_settings);
    },

    supplement: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.supplement', 'POST', callback_function, argv, custom_settings);
    },

    refuse_appointment: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.refuse_appointment', 'POST', callback_function, argv, custom_settings);
    },

    go_to_detail_for_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.go_to_detail_for_teacher', 'POST', callback_function, argv, custom_settings);
    },

    changeSubject: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.changeSubject', 'POST', callback_function, argv, custom_settings);
    },

    iWantToAnswer: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.iWantToAnswer', 'POST', callback_function, argv, custom_settings);
    },

    get_more_can_be_claimed_questions: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.get_more_can_be_claimed_questions', 'POST', callback_function, argv, custom_settings);
    },

    passQuestion: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.passQuestion', 'POST', callback_function, argv, custom_settings);
    },

    update_subject_and_kpoint: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.update_subject_and_kpoint', 'POST', callback_function, argv, custom_settings);
    },

    getStudentInfo: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.getStudentInfo', 'POST', callback_function, argv, custom_settings);
    },

    get_new_question_count: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.get_new_question_count', 'POST', callback_function, argv, custom_settings);
    },

    delete_qc_from_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.delete_qc_from_teacher', 'POST', callback_function, argv, custom_settings);
    },

    get_appointment_count: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.get_appointment_count', 'POST', callback_function, argv, custom_settings);
    },

    get_more_favorites: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.get_more_favorites', 'POST', callback_function, argv, custom_settings);
    },

    student_urge_question: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.student_urge_question', 'POST', callback_function, argv, custom_settings);
    },

    setDifficulty: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.setDifficulty', 'POST', callback_function, argv, custom_settings);
    },

    release_appointment: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.release_appointment', 'POST', callback_function, argv, custom_settings);
    },

    setKnowledgePoint: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.setKnowledgePoint', 'POST', callback_function, argv, custom_settings);
    },

    iWantToWithdraw: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.iWantToWithdraw', 'POST', callback_function, argv, custom_settings);
    },

    get_more_stu_questions: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.get_more_stu_questions', 'POST', callback_function, argv, custom_settings);
    },

    saveKPoint: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.saveKPoint', 'POST', callback_function, argv, custom_settings);
    },

    workbench_get_new_questions_count: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.workbench_get_new_questions_count', 'POST', callback_function, argv, custom_settings);
    },

    check_new_question_notification: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.check_new_question_notification', 'POST', callback_function, argv, custom_settings);
    },

    send_report_message: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.send_report_message', 'POST', callback_function, argv, custom_settings);
    },

    check_new_answer_notification: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.check_new_answer_notification', 'POST', callback_function, argv, custom_settings);
    },

    workbench_get_questions_status: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.workbench_get_questions_status', 'POST', callback_function, argv, custom_settings);
    },

    dean_push_question_to_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.dean_push_question_to_teacher', 'POST', callback_function, argv, custom_settings);
    },

    returnQuestion: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.returnQuestion', 'POST', callback_function, argv, custom_settings);
    },

    student_evaluate: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.student_evaluate', 'POST', callback_function, argv, custom_settings);
    },

    reanswer: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.reanswer', 'POST', callback_function, argv, custom_settings);
    },

    student_withdraw_question: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.student_withdraw_question', 'POST', callback_function, argv, custom_settings);
    },

    workbench_get_more_other_questions: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.question.workbench_get_more_other_questions', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        videolive: {
    
    add_info: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.videolive.add_info', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        wxrobot: {
    
    send_wxmsg_to_student: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.wxrobot.send_wxmsg_to_student', 'POST', callback_function, argv, custom_settings);
    },

    regist_login_notification: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.wxrobot.regist_login_notification', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        share: {
    
    add_record_download_times: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.share.add_record_download_times', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        pbook: {
    
    i_wanna_ask: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.pbook.i_wanna_ask', 'POST', callback_function, argv, custom_settings);
    },

    submit_memo: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.pbook.submit_memo', 'POST', callback_function, argv, custom_settings);
    },

    set_problem_status: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.pbook.set_problem_status', 'POST', callback_function, argv, custom_settings);
    },

    problem_pic_rotate: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.pbook.problem_pic_rotate', 'POST', callback_function, argv, custom_settings);
    },

    delete_problem: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.pbook.delete_problem', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        note: {
    
    save_student_tags: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.note.save_student_tags', 'POST', callback_function, argv, custom_settings);
    },

    save_student_gender_grade: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.note.save_student_gender_grade', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        o2o: {
    
    cancel_lesson: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.cancel_lesson', 'POST', callback_function, argv, custom_settings);
    },

    online_comment: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.online_comment', 'POST', callback_function, argv, custom_settings);
    },

    get_teacher_today_onlines_count: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.get_teacher_today_onlines_count', 'POST', callback_function, argv, custom_settings);
    },

    check_online_conflict: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.check_online_conflict', 'POST', callback_function, argv, custom_settings);
    },

    lesson_call: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.lesson_call', 'POST', callback_function, argv, custom_settings);
    },

    online_response: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.online_response', 'POST', callback_function, argv, custom_settings);
    },

    set_lesson_finished: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.set_lesson_finished', 'POST', callback_function, argv, custom_settings);
    },

    add_lesson: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.add_lesson', 'POST', callback_function, argv, custom_settings);
    },

    set_online_started: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.set_online_started', 'POST', callback_function, argv, custom_settings);
    },

    set_online_finished: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.set_online_finished', 'POST', callback_function, argv, custom_settings);
    },

    set_online_cancel: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.set_online_cancel', 'POST', callback_function, argv, custom_settings);
    },

    appeal_shopping: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.appeal_shopping', 'POST', callback_function, argv, custom_settings);
    },

    change_shopping_comment_status: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.change_shopping_comment_status', 'POST', callback_function, argv, custom_settings);
    },

    make_class_time_tag: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.make_class_time_tag', 'POST', callback_function, argv, custom_settings);
    },

    change_goods_status: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.change_goods_status', 'POST', callback_function, argv, custom_settings);
    },

    response_shopping_comment: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.o2o.response_shopping_comment', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        game: {
    
    vote_school_wx_add_share: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.vote_school_wx_add_share', 'POST', callback_function, argv, custom_settings);
    },

    go_to_college_app_add_share: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.go_to_college_app_add_share', 'POST', callback_function, argv, custom_settings);
    },

    go_to_college_wx_add_share: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.go_to_college_wx_add_share', 'POST', callback_function, argv, custom_settings);
    },

    bless_add_share: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.bless_add_share', 'POST', callback_function, argv, custom_settings);
    },

    commit_bless: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.commit_bless', 'POST', callback_function, argv, custom_settings);
    },

    vote_school_app_add_share: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.vote_school_app_add_share', 'POST', callback_function, argv, custom_settings);
    },

    one_rmb_wx_add_share: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.one_rmb_wx_add_share', 'POST', callback_function, argv, custom_settings);
    },

    activation_vote_for_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.activation_vote_for_teacher', 'POST', callback_function, argv, custom_settings);
    },

    vote_for_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.vote_for_teacher', 'POST', callback_function, argv, custom_settings);
    },

    one_rmb_app_add_share: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.one_rmb_app_add_share', 'POST', callback_function, argv, custom_settings);
    },

    get_province_city_district_by_name: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.get_province_city_district_by_name', 'POST', callback_function, argv, custom_settings);
    },

    get_schools_by_district_id: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.game.get_schools_by_district_id', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        api: {
    
    send_msg: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.api.send_msg', 'POST', callback_function, argv, custom_settings);
    },

    start_teacher_answer_model: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.api.start_teacher_answer_model', 'POST', callback_function, argv, custom_settings);
    },

    get_user_info_for_online_chat: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.api.get_user_info_for_online_chat', 'POST', callback_function, argv, custom_settings);
    },

    flush_rtoken_online: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.api.flush_rtoken_online', 'POST', callback_function, argv, custom_settings);
    },

    send_msg_from_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.api.send_msg_from_teacher', 'POST', callback_function, argv, custom_settings);
    },

    start_student_supplement_model: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.api.start_student_supplement_model', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        student: {
    
    student_coin_move_to_other: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.student.student_coin_move_to_other', 'POST', callback_function, argv, custom_settings);
    },

    save_adjust: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.student.save_adjust', 'POST', callback_function, argv, custom_settings);
    },

    get_more_bonus: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.student.get_more_bonus', 'POST', callback_function, argv, custom_settings);
    },

    get_more_bill: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.student.get_more_bill', 'POST', callback_function, argv, custom_settings);
    },

    get_students_info: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.student.get_students_info', 'POST', callback_function, argv, custom_settings);
    },

    pay_more_coin: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.student.pay_more_coin', 'POST', callback_function, argv, custom_settings);
    },

    student_edit_address: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.student.student_edit_address', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        statistic: {
    
    del_teacher_msg: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.statistic.del_teacher_msg', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        promotion: {
    
    ad_fill_phone: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.promotion.ad_fill_phone', 'POST', callback_function, argv, custom_settings);
    },

    ad_record_download: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.promotion.ad_record_download', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        qlib: {
    
    sync_quiz_record: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.qlib.sync_quiz_record', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        teacher: {
    
    apply_audit_pic: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.apply_audit_pic', 'POST', callback_function, argv, custom_settings);
    },

    getKPointTeacherMsg: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.getKPointTeacherMsg', 'POST', callback_function, argv, custom_settings);
    },

    update_password: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.update_password', 'POST', callback_function, argv, custom_settings);
    },

    to_unfreeze_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.to_unfreeze_teacher', 'POST', callback_function, argv, custom_settings);
    },

    follow_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.follow_teacher', 'POST', callback_function, argv, custom_settings);
    },

    to_change_active: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.to_change_active', 'POST', callback_function, argv, custom_settings);
    },

    order_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.order_teacher', 'POST', callback_function, argv, custom_settings);
    },

    get_more_teachers: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.get_more_teachers', 'POST', callback_function, argv, custom_settings);
    },

    to_freeze_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.to_freeze_teacher', 'POST', callback_function, argv, custom_settings);
    },

    setKPointTeacherMsgRead: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.setKPointTeacherMsgRead', 'POST', callback_function, argv, custom_settings);
    },

    check_audit: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.check_audit', 'POST', callback_function, argv, custom_settings);
    },

    apply_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.apply_teacher', 'POST', callback_function, argv, custom_settings);
    },

    apply_audit: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.apply_audit', 'POST', callback_function, argv, custom_settings);
    },

    login: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.login', 'POST', callback_function, argv, custom_settings);
    },

    send_batch_wx_msg: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.send_batch_wx_msg', 'POST', callback_function, argv, custom_settings);
    },

    answer_audit_questions: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.answer_audit_questions', 'POST', callback_function, argv, custom_settings);
    },

    to_scrap_teacher: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.teacher.to_scrap_teacher', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    ,
    
    
        feedback: {
    
    handle_appeal: function(callback_function, argv, custom_settings){
        return Dajaxice.call('dayi.feedback.handle_appeal', 'POST', callback_function, argv, custom_settings);
    }


    
    
    }
    

    
    
    
    }
    
,
    

    get_cookie: function(name)
    {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].toString().replace(/^\s+/, "").replace(/\s+$/, "");
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    },

    call: function(dajaxice_function, method, dajaxice_callback, argv, custom_settings)
    {
        var custom_settings = custom_settings || {},
            error_callback = Dajaxice.get_setting('default_exception_callback');

        if('error_callback' in custom_settings && typeof(custom_settings['error_callback']) == 'function'){
            error_callback = custom_settings['error_callback'];
        }

        var send_data = 'argv='+encodeURIComponent(JSON.stringify(argv)),
            oXMLHttpRequest = new XMLHttpRequest,
            endpoint = '/dajaxice/'+dajaxice_function+'/';

        if(method == 'GET'){
            endpoint = endpoint + '?' + send_data;
        }
        oXMLHttpRequest.open(method, endpoint);
        oXMLHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        oXMLHttpRequest.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        oXMLHttpRequest.setRequestHeader("X-CSRFToken", Dajaxice.get_cookie('csrftoken'));
        oXMLHttpRequest.onreadystatechange = function() {
            if (this.readyState == XMLHttpRequest.DONE) {
                if(this.responseText == Dajaxice.EXCEPTION || !(this.status in Dajaxice.valid_http_responses())){
                    error_callback();
                }
                else{
                    var response;
                    try {
                        response = JSON.parse(this.responseText);
                    }
                    catch (exception) {
                        response = this.responseText;
                    }
                    dajaxice_callback(response);
                }
            }
        }
        if(method == 'POST'){
            oXMLHttpRequest.send(send_data);
        }
        else{
            oXMLHttpRequest.send();
        }
        return oXMLHttpRequest;
    },

    setup: function(settings)
    {
        this.settings = settings;
    },

    get_setting: function(key){
        if(this.settings == undefined || this.settings[key] == undefined){
            return Dajaxice.default_settings[key];
        }
        return this.settings[key];
    },

    valid_http_responses: function(){
        return {200: null, 301: null, 302: null, 304: null}
    },

    EXCEPTION: 'DAJAXICE_EXCEPTION',
    default_settings: {'default_exception_callback': function(){ console.log('Dajaxice: Something went wrong.')}}
};

window['Dajaxice'] = Dajaxice;



(function(){function n(){this._object=h&&!p?new h:new window.ActiveXObject("Microsoft.XMLHTTP");this._listeners=[]}function a(){return new n}function j(b){a.onreadystatechange&&a.onreadystatechange.apply(b);b.dispatchEvent({type:"readystatechange",bubbles:!1,cancelable:!1,timeStamp:new Date+0})}function o(b){try{b.responseText=b._object.responseText}catch(a){}try{var d;var g=b._object,c=g.responseXML,f=g.responseText;i&&(f&&c&&!c.documentElement&&g.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/))&&
(c=new window.ActiveXObject("Microsoft.XMLDOM"),c.async=!1,c.validateOnParse=!1,c.loadXML(f));d=c&&(i&&0!==c.parseError||!c.documentElement||c.documentElement&&"parsererror"==c.documentElement.tagName)?null:c;b.responseXML=d}catch(h){}try{b.status=b._object.status}catch(k){}try{b.statusText=b._object.statusText}catch(j){}}function l(b){b._object.onreadystatechange=new window.Function}var h=window.XMLHttpRequest,m=!!window.controllers,i=window.document.all&&!window.opera,p=i&&window.navigator.userAgent.match(/MSIE 7.0/);
a.prototype=n.prototype;m&&h.wrapped&&(a.wrapped=h.wrapped);a.UNSENT=0;a.OPENED=1;a.HEADERS_RECEIVED=2;a.LOADING=3;a.DONE=4;a.prototype.readyState=a.UNSENT;a.prototype.responseText="";a.prototype.responseXML=null;a.prototype.status=0;a.prototype.statusText="";a.prototype.priority="NORMAL";a.prototype.onreadystatechange=null;a.onreadystatechange=null;a.onopen=null;a.onsend=null;a.onabort=null;a.prototype.open=function(b,e,d,g,c){delete this._headers;arguments.length<3&&(d=true);this._async=d;var f=
this,h=this.readyState,k=null;if(i&&d){k=function(){if(h!=a.DONE){l(f);f.abort()}};window.attachEvent("onunload",k)}a.onopen&&a.onopen.apply(this,arguments);arguments.length>4?this._object.open(b,e,d,g,c):arguments.length>3?this._object.open(b,e,d,g):this._object.open(b,e,d);this.readyState=a.OPENED;j(this);this._object.onreadystatechange=function(){if(!m||d){f.readyState=f._object.readyState;o(f);if(f._aborted)f.readyState=a.UNSENT;else if(f.readyState==a.DONE){delete f._data;l(f);i&&d&&window.detachEvent("onunload",
k);h!=f.readyState&&j(f);h=f.readyState}}}};a.prototype.send=function(b){a.onsend&&a.onsend.apply(this,arguments);arguments.length||(b=null);if(b&&b.nodeType){b=window.XMLSerializer?(new window.XMLSerializer).serializeToString(b):b.xml;this._headers["Content-Type"]||this._object.setRequestHeader("Content-Type","application/xml")}this._data=b;a:{this._object.send(this._data);if(m&&!this._async){this.readyState=a.OPENED;for(o(this);this.readyState<a.DONE;){this.readyState++;j(this);if(this._aborted)break a}}}};
a.prototype.abort=function(){a.onabort&&a.onabort.apply(this,arguments);if(this.readyState>a.UNSENT)this._aborted=true;this._object.abort();l(this);this.readyState=a.UNSENT;delete this._data};a.prototype.getAllResponseHeaders=function(){return this._object.getAllResponseHeaders()};a.prototype.getResponseHeader=function(b){return this._object.getResponseHeader(b)};a.prototype.setRequestHeader=function(b,a){if(!this._headers)this._headers={};this._headers[b]=a;return this._object.setRequestHeader(b,
a)};a.prototype.addEventListener=function(a,e,d){for(var g=0,c;c=this._listeners[g];g++)if(c[0]==a&&c[1]==e&&c[2]==d)return;this._listeners.push([a,e,d])};a.prototype.removeEventListener=function(a,e,d){for(var g=0,c;c=this._listeners[g];g++)if(c[0]==a&&c[1]==e&&c[2]==d)break;c&&this._listeners.splice(g,1)};a.prototype.dispatchEvent=function(a){a={type:a.type,target:this,currentTarget:this,eventPhase:2,bubbles:a.bubbles,cancelable:a.cancelable,timeStamp:a.timeStamp,stopPropagation:function(){},preventDefault:function(){},
initEvent:function(){}};a.type=="readystatechange"&&this.onreadystatechange&&(this.onreadystatechange.handleEvent||this.onreadystatechange).apply(this,[a]);for(var e=0,d;d=this._listeners[e];e++)d[0]==a.type&&!d[2]&&(d[1].handleEvent||d[1]).apply(this,[a])};a.prototype.toString=function(){return"[object XMLHttpRequest]"};a.toString=function(){return"[XMLHttpRequest]"};window.Function.prototype.apply||(window.Function.prototype.apply=function(a,e){e||(e=[]);a.__func=this;a.__func(e[0],e[1],e[2],e[3],
e[4]);delete a.__func});window.XMLHttpRequest=a})();




var JSON;JSON||(JSON={});
(function(){function k(a){return 10>a?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function m(a,j){var c,d,h,n,g=e,f,b=j[a];b&&("object"===typeof b&&"function"===typeof b.toJSON)&&(b=b.toJSON(a));"function"===typeof i&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);case "object":if(!b)return"null";
e+=l;f=[];if("[object Array]"===Object.prototype.toString.apply(b)){n=b.length;for(c=0;c<n;c+=1)f[c]=m(c,b)||"null";h=0===f.length?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&"object"===typeof i){n=i.length;for(c=0;c<n;c+=1)"string"===typeof i[c]&&(d=i[c],(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=m(d,b))&&f.push(o(d)+(e?": ":":")+h);h=0===f.length?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+
"}";e=g;return h}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,l,r={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,j,c){var d;l=e="";if(typeof c==="number")for(d=0;d<c;d=d+1)l=l+" ";else typeof c==="string"&&(l=c);if((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return m("",{"":a})});
"function"!==typeof JSON.parse&&(JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&typeof b==="object")for(g in b)if(Object.prototype.hasOwnProperty.call(b,g)){f=c(b,g);f!==void 0?b[g]=f:delete b[g]}return e.call(a,d,b)}var d,a=String(a);q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){d=eval("("+a+")");return typeof e==="function"?c({"":d},""):d}throw new SyntaxError("JSON.parse");})})();

