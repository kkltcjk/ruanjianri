/************************************
 * @description 英语题目测试
 * @createDate 2013-10-15
 * @author wragony
 ************************************/

var cookie_name = 'quiz_result_json';
var array_len = 15;

$(document).ready(function(){ 
	$('html, body').animate({scrollTop: 50}, 300); 
	tips_on_ready();
});

/**
 * 选择一个选项
 */
var choice = function(_this){
	$('#div_choice_item a').removeClass('active');
	$(_this).addClass('active');
	$('#div_tips_not_select').addClass('hidden');
	$('#div_tips_words_ready').addClass('hidden');
}

/**
 * 提交答案
 */
var post = function(_this, qapackid){
	$('#div_choice_item a').find("span[name='judge']").attr('class','');
	var answer = $('#choice_answer').val();
	var choice_name = $('#div_choice_item .active').find("span[name='choice_name']").text();
	var judgeobj = $('#div_choice_item .active').find("span[name='judge']");
	//console.info(choice_name);
	$('#div_tips_words_ready').addClass('hidden');
	if(typeof(choice_name)=='undefined' || choice_name==""){
		$('#div_tips_not_select').removeClass('hidden');
		return;    		
	}else{
		$('#div_tips_not_select').addClass('hidden');
	}
	var quiz_result = '0';
	if(choice_name == answer){//ok
		quiz_result = '1';
		judgeobj.attr('class','glyphicon glyphicon-ok pull-right');
		judgeobj.parent("a").addClass('success');
	}else{//wrang
		quiz_result = '0';
		judgeobj.attr('class','glyphicon glyphicon-remove pull-right');
		judgeobj.parent("a").addClass('warning');
		$('#div_choice_item').find("a[name='answer_item']").each(function(){
			var _choice_name = $(this).find("span[name='choice_name']").text();
			//console.info(_choice_name);
			if(typeof(_choice_name)!='undefined' && _choice_name == answer){
				 $(this).find("span[name='judge']").attr('class','glyphicon glyphicon-ok pull-right');
				 $(this).addClass('success');
				 return false;
			}
		});
	}
	calc_quiz_result(qapackid, quiz_result);
	
	$(_this).remove().fadeOut(200);
	$('#btn_next').removeClass('hidden');
	$('#div_tips_post_result').removeClass('hidden');
	$('#div_choice_item').find("a[name='answer_item']").attr("onclick","javascript:void(0);");
	
	//sync quiz record
	var wxid = $('#hidden_wxid').val();
	var subject = $('#hidden_subject').val();
	var qtype = $('#hidden_qtype').val();
	var state = parseInt(quiz_result);
	sync_quiz_record(qapackid, wxid, subject, qtype, choice_name, state);
}

/**
 * 下一道题
 */
var next = function(){
	var qstrs_encode = $.cookie(cookie_name);
	if(typeof(qstrs_encode)!='undefined' && qstrs_encode!=null && qstrs_encode!=""){
		try{
			var array_qstrs = decodeURIComponent(qstrs_encode).split("-");
			var qapackids = [];
			$.each(array_qstrs, function(n,obj){
				var jsonobj = $.parseJSON(obj);
				//console.info(jsonobj.qapackid);
				qapackids.push(jsonobj.qapackid);
			});
			//console.info($.unique(qapackids));
			qapackids = $.unique(qapackids); 
			var qids = qapackids.join(",");
			$('#hidden_qapackids').val(qids);
			var form = $('#postForm');
			form.submit();
		}catch(err){
			$.cookie(cookie_name,null);
		}
	}else{
		window.location.reload();
	}
}

/**
 * 计算答题结果
 */
var calc_quiz_result = function(qapackid, test_result){
	var array_qstrs = [];
	var qstrs_encode = $.cookie(cookie_name);
	var jsonstr = '{"qapackid":"'+qapackid+'","result":"'+test_result+'"}';
	if(typeof(qstrs_encode)!='undefined' && qstrs_encode!=null && qstrs_encode!=""){
		array_qstrs = decodeURIComponent(qstrs_encode).split("-");
		if(array_qstrs!=null && array_qstrs.length>0){
		   	if(array_qstrs.length >= array_len){
		   		array_qstrs = [];
		   	}
		}
	}
	array_qstrs.push(jsonstr);
	var cookie_value = encodeURIComponent(array_qstrs.join("-"));
	//console.info(decodeURIComponent(cookie_value));
	$.cookie(cookie_name, cookie_value);
	if(array_qstrs.length > 0){
		var total_num = 0;
		var correct_num = 0;
		$.each(array_qstrs, function(n,obj){
			if(obj && typeof(obj)!='undefined')
			var jsonobj = $.parseJSON(obj);
			if(jsonobj.result == '1'){
				correct_num ++;
			}    					
			total_num ++;
			if(total_num > array_len){
				total_num = array_len;
			}
		});
		
		var accuracy = Math.round((correct_num/total_num)*100);
		var span_obj = $('#div_tips_post_result').find("span");
		var calc_words = span_obj.text().replace('%s2',correct_num).replace('%s3',accuracy + '%');
		span_obj.html(calc_words);
		
		$('#div_tips_post_result').removeClass('hidden');
		$('#div_analysis_body_block').removeClass('hidden');
	}
}

/**
 * 页面加载时的一些提示
 */
var tips_on_ready = function(){
	var correct_num = 0,total_num = 0;
	var qstrs_encode = $.cookie(cookie_name);
	if(typeof(qstrs_encode)!='undefined' && qstrs_encode!=null && qstrs_encode!=""){
		var array_qstrs = decodeURIComponent(qstrs_encode).split("-");
		$.each(array_qstrs, function(n,obj){
			total_num ++;
			if(total_num > array_len){
				total_num = array_len;
			}
			try {
				var jsonobj = $.parseJSON(obj);
				if(jsonobj.result == '1'){
					correct_num ++;
				}    	
			} catch (e) {
			}
		});
		if(array_qstrs!=null && array_qstrs.length==array_len){
			$('#div_tips_words_ready').removeClass('hidden');
			
		   	//激励提示
			var stimulate_tips = loading_stimulate_tips(correct_num);
			$('#stimulate_tips').find('span').text(stimulate_tips);
		   	$('#stimulate_tips').removeClass('hidden');
		   	
			total_num = 1;
		}else{
			total_num = total_num + 1;
		}
	}else{
		total_num = total_num + 1;
	}
	$('#span_progress').html($('#span_progress').text().replace('%s0',total_num).replace('s1%',array_len));
}

/**
 * 同步答题记录到服务端
 */
var sync_quiz_record = function(qapackid, wxid, subject, qtype, answer, state) {
	Dajaxice.dayi.qlib.sync_quiz_record(sync_quiz_record_callback, {
		'qapackid':qapackid, 
		'wxid':wxid, 
		'subject':subject, 
		'qtype':qtype,
		'answer':encodeURIComponent(answer),
		'state':state
	});
}

var sync_quiz_record_callback = function(jsonresult){
	if(jsonresult.retcode == 1) {
		 //do something
	} else {
		alert("sync quiz record failed!")
	}
}

var loading_stimulate_tips = function(correct_num){
	if(correct_num > array_len){
		correct_num = array_len;
	}
	var arrayobj = get_array_regex();
	if(null != arrayobj){
		var range_tips_obj = arrayobj[correct_num];
		var ranges = range_tips_obj.range;
		var tips = range_tips_obj.tips+"";
		if(ranges.length==1){
			if(tips.indexOf('s%') != -1){
				var rate = ranges[0];
				return tips.replace("s%", rate + '%');
			}else{
				return tips;
			}
		}
		else if(ranges.length == 2){
			var start = ranges[0];
			var end = ranges[1];
			var rate = Math.ceil(Math.random()*(end-start)+start);
			return tips.replace("s%", rate + '%');
		}
	}
	return "";
}

var get_array_regex = function(){
	
	var TIPS_LOW_NONE = "糟糕，你巧妙的避开了所有正确答案！";
	var TIPS_LOW_LEVEL = "你击败了全国s%的同学，继续努力！";
	var TIPS_MID_LEVEL = "你击败了全国s%的同学，非常不错！";
	var TIPS_HIGH_LEVEL = "你击败了全国s%的同学，恭喜你！";

	var STIMULATE_REGEX = [
		{"range":[0], "tips":TIPS_LOW_NONE  },
		{"range":[1], "tips":TIPS_LOW_LEVEL },
		{"range":[2,4], "tips":TIPS_LOW_LEVEL },
		{"range":[5,9], "tips":TIPS_LOW_LEVEL },
		{"range":[10,15], "tips":TIPS_LOW_LEVEL },
		{"range":[16,22], "tips":TIPS_LOW_LEVEL },
		{"range":[23,32], "tips":TIPS_LOW_LEVEL },
		{"range":[33,45], "tips":TIPS_LOW_LEVEL },
		{"range":[46,58], "tips":TIPS_LOW_LEVEL },
		{"range":[59,62], "tips":TIPS_LOW_LEVEL },
		{"range":[63,72], "tips":TIPS_LOW_LEVEL },
		{"range":[73,79], "tips":TIPS_MID_LEVEL },
		{"range":[80,88], "tips":TIPS_MID_LEVEL },
		{"range":[89,94], "tips":TIPS_MID_LEVEL },
		{"range":[95,98], "tips":TIPS_HIGH_LEVEL},
		{"range":[99], "tips":TIPS_HIGH_LEVEL}
	];
	
	return STIMULATE_REGEX;
}
    