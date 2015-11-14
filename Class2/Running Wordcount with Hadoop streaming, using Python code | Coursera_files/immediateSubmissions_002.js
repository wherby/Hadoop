"use strict";define("bundles/programming/views/immediateSubmissions",["require","exports","module","react-with-addons","underscore","bundles/phoenix/components/ContentPlaceholder","bundles/phoenix/lib/eventDefinitions","bundles/phoenix/lib/view","bundles/phoenix/lib/viewModel","i18n!nls/assess","bundles/programming/components/SubmissionHistory","bundles/programming/components/SubmissionInfo","bundles/programming/views/immediateSubmissions.html","css!bundles/phoenix/styl/containers.css"],function(require,exports,module){var s=require("react-with-addons"),_=require("underscore"),m=require("bundles/phoenix/components/ContentPlaceholder"),e=require("bundles/phoenix/lib/eventDefinitions"),t=require("bundles/phoenix/lib/view"),o=require("bundles/phoenix/lib/viewModel"),i=require("i18n!nls/assess"),a=require("bundles/programming/components/SubmissionHistory"),n=require("bundles/programming/components/SubmissionInfo"),u=require("bundles/programming/views/immediateSubmissions.html");require("css!bundles/phoenix/styl/containers.css");var r=o.extend({defaults:{state:"no-submissions"},fsm:{states:["no-submissions","has-submissions"],transitions:{"has-submissions":["no-submissions"]}}}),d=t.extend({template:u,multitracker:{namespace:"open_course_item.programing_immediate_submissions",baseValues:["open_course_id","module_id","lesson_id","item_id"],definitions:{open_course_id:e.metadata("course.id"),module_id:e.metadata("lesson.module.id"),lesson_id:e.metadata("lesson.id"),item_id:e.metadata("id")},events:{render:[]}},initialize:function initialize(s){_(this).extend(_(s).pick("itemMetadata","submissionHistory","assignmentParts")),this.bestSubmission=this.submissionHistory.getBestSubmission(),this.latestSubmission=this.submissionHistory.getLatestSubmission(),this.latestSubmissionIsBest=this.latestSubmission===this.bestSubmission,this.stateModel=new r,this.submissionHistory.length>0&&this.stateModel.transition("has-submissions")},postRender:function postRender(){this.track("render")},renderSubviews:function renderSubviews(){this.renderReactViews()},renderReactViews:function renderReactViews(){0===this.submissionHistory.length?this.renderNoSubmissionsViews():this.renderHasSubmissionsViews()},renderNoSubmissionsViews:function renderNoSubmissionsViews(){s.render(s.createElement(m,{title:i("No submission, yet"),message:[i("Check back after submitting"),i("using the instructions on this page.")]}),this.$$("no-submissions-placeholder")[0])},renderHasSubmissionsViews:function renderHasSubmissionsViews(){this.bestSubmission&&s.render(s.createElement(n,{moduleId:this.itemMetadata.get("lesson.module.id"),title:i(this.latestSubmissionIsBest?"Best and Most Recent Submission":"Best Submission"),submission:this.bestSubmission,assignmentParts:this.assignmentParts,isExpanded:!0}),this.$$("best-submission")[0]),this.latestSubmission&&!this.latestSubmissionIsBest&&s.render(s.createElement(n,{title:i("Most Recent Submission"),submission:this.latestSubmission,assignmentParts:this.assignmentParts}),this.$$("latest-submission")[0]),s.render(s.createElement(a,{submissions:this.submissionHistory}),this.$$("submission-history")[0])}});module.exports=d});