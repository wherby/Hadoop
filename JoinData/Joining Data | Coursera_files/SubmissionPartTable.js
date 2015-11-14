"use strict";define("bundles/programming/components/SubmissionPartTable",["require","exports","module","react-with-addons","underscore","i18n!nls/programming","bundles/programming/models/immediate/assignmentParts","bundles/programming/models/submissionPartEvaluation"],function(require,exports,module){var e=require("react-with-addons"),_=require("underscore"),t=require("i18n!nls/programming"),n=require("bundles/programming/models/immediate/assignmentParts"),a=require("bundles/programming/models/submissionPartEvaluation"),r=e.createClass({displayName:"SubmissionPartTable",propTyps:{assignmentParts:e.PropTypes.instanceOf(n).isRequired,evaluations:e.PropTypes.arrayOf(e.PropTypes.instanceOf(a)).isRequired,columns:e.PropTypes.arrayOf(e.PropTypes.shape({title:e.PropTypes.string.isRequired,value:e.PropTypes.func.isRequired}))},getDefaultProps:function getDefaultProps(){return{columns:[{title:t("Part"),align:"center",value:function value(e){return e.assignmentPart.get("order")+1}},{title:t("Name"),align:"left",value:function value(e){return e.assignmentPart.get("title")}},{title:t("Score"),align:"right",value:function value(n){var t=n.evaluation;return e.createElement("span",null,t.get("score")," / ",t.get("maxScore"))}}]}},render:function render(){var t=this,n=this.props.evaluations.map(function(e){return{assignmentPart:t.props.assignmentParts.getPartWithId(e.get("partId")),evaluation:e}});return e.createElement("table",{className:"rc-SubmissionPartTable table"},e.createElement("thead",null,this.props.columns.map(function(t){return e.createElement("th",{key:t.title,className:"align-"+t.align},t.title)})),e.createElement("tbody",null,n.map(function(n){return e.createElement("tr",{key:n.evaluation.get("partId")},t.props.columns.map(function(t){return e.createElement("td",{key:t.title,className:"align-"+t.align},t.value(n))}))})))}});module.exports=r});