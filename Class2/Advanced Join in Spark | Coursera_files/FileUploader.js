"use strict";define("bundles/phoenix/components/FileUploader",["require","exports","module","classnames","q","react-with-addons","underscore","bundles/phoenix/components/fileUploader/constants","js/lib/transloadit","css!./__styles__/FileUploader"],function(require,exports,module){var o=require("classnames"),t=require("q"),e=require("react-with-addons"),_=require("underscore"),s=require("bundles/phoenix/components/fileUploader/constants"),r=require("js/lib/transloadit");require("css!./__styles__/FileUploader");var n=e.createClass({displayName:"FileUploaderForm",propTypes:{templateId:e.PropTypes.string.isRequired,onReset:e.PropTypes.func.isRequired,fields:e.PropTypes.object,buttonContent:e.PropTypes.any,buttonClasses:e.PropTypes.array,onUploadSelect:e.PropTypes.func,onUploadStart:e.PropTypes.func,onUploadProgress:e.PropTypes.func,onUploadComplete:e.PropTypes.func,onUploadResult:e.PropTypes.func,onUploadSuccess:e.PropTypes.func,onUploadError:e.PropTypes.func,onUploadCancel:e.PropTypes.func},getInitialState:function getInitialState(){return{state:"ready",progress:0}},getDefaultProps:function getDefaultProps(){return{hideFormWhileUploading:!0,buttonClasses:[]}},componentDidMount:function componentDidMount(){this.createUploader()},componentWillUnmount:function componentWillUnmount(){this.removeUploader()},createUploader:function createUploader(){var e={params:{auth:{key:s.transloaditKey},template_id:this.props.templateId,fields:this.props.fields}};this.uploader=r(this.refs.uploader.getDOMNode(),e),this.uploader.on("select",this.onSelect),this.uploader.on("start",this.onStart),this.uploader.on("progress",this.onProgress),this.uploader.on("upload-complete",this.onUploadComplete),this.uploader.on("result",this.onResult),this.uploader.on("success",this.onSuccess),this.uploader.on("error",this.onError),this.uploader.on("cancel",this.onCancel)},removeUploader:function removeUploader(){if(!this.uploader)return;this.uploader.reset(),this.uploader.off("select",this.onSelect),this.uploader.off("start",this.onStart),this.uploader.off("progress",this.onProgress),this.uploader.off("upload-complete",this.onUploadComplete),this.uploader.off("result",this.onResult),this.uploader.off("success",this.onSuccess),this.uploader.off("error",this.onError),this.uploader.off("cancel",this.onCancel),this.uploader=null},reset:function reset(){this.removeUploader(),this.props.onReset()},onSelect:function onSelect(){this.setState({state:"uploading",progress:0}),this.props.onUploadSelect&&this.props.onUploadSelect()},onStart:function onStart(){this.props.onUploadStart&&this.props.onUploadStart()},onProgress:function onProgress(e){var s=e.bytes_received,o=e.bytes_expected,t=0===o?0:100*s/o;this.setState({progress:t}),this.props.onUploadProgress&&this.props.onUploadProgress(t)},onUploadComplete:function onUploadComplete(e,o){this.props.onUploadComplete&&this.props.onUploadComplete(e,o)},onResult:function onResult(e,o){this.props.onUploadResult&&this.props.onUploadResult(e,o)},onSuccess:function onSuccess(e){this.setState({state:"uploaded",progress:100}),this.props.onUploadSuccess?t.fcall(this.props.onUploadSuccess,e).then(this.reset).done():this.reset()},onError:function onError(e){"uploading"===this.state.state&&this.uploader.cancel(),this.setState({state:"error",progress:0,error:e}),this.props.onUploadError&&this.props.onUploadError(e),this.reset()},onCancel:function onCancel(){this.props.onUploadCancel&&this.props.onUploadCancel()},handleCancel:function handleCancel(){this.uploader.cancel(),this.onCancel(),this.reset()},renderUploadingState:function renderUploadingState(){if("uploading"===this.state.state){var o=this.state.progress||0,t=Math.min(Math.max(o,5),95).toFixed(2),s={width:t+"%"};return e.createElement("div",{className:"uploaded"},e.createElement("div",{className:"bt3-progress"},e.createElement("div",{className:"bt3-progress-bar",style:s})),this.props.showCancelLink&&e.createElement("a",{className:"upload-cancel",onClick:this.handleCancel},"Cancel"))}},renderUploadedState:function renderUploadedState(){if("uploaded"===this.state.state)return e.createElement("div",{className:"uploaded"},"Uploaded")},render:function render(){var t=o("rc-FileUploaderForm",{uploading:"uploading"===this.state.state}),s=o({"bt3-hide":this.props.hideFormWhileUploading&&"ready"!==this.state.state}),r=o("bt3-btn","upload-button",this.props.buttonClasses);return e.createElement("div",{className:t},e.createElement("form",{className:s},e.createElement("a",{ref:"uploader",className:r},this.props.children||this.props.buttonContent,e.createElement("input",{type:"file",name:"file",multiple:"false"}))),this.renderUploadingState(),this.renderUploadedState())}}),p=e.createClass({displayName:"FileUploader",propTypes:{templateId:e.PropTypes.string.isRequired,fields:e.PropTypes.object,buttonContent:e.PropTypes.any,buttonClasses:e.PropTypes.array,showCancelLink:e.PropTypes.bool,onReset:e.PropTypes.func,onUploadSelect:e.PropTypes.func,onUploadStart:e.PropTypes.func,onUploadProgress:e.PropTypes.func,onUploadComplete:e.PropTypes.func,onUploadResult:e.PropTypes.func,onUploadSuccess:e.PropTypes.func,onUploadError:e.PropTypes.func,onUploadCancel:e.PropTypes.func},getDefaultProps:function getDefaultProps(){return{showCancelLink:!1}},componentDidMount:function componentDidMount(){this.createForm()},componentDidUpdate:function componentDidUpdate(){this.createForm()},onReset:function onReset(){this.removeForm(),this.createForm(),this.props.onReset&&this.props.onReset()},createForm:function createForm(){var o=_({}).extend(this.props,{onReset:this.onReset});e.render(e.createElement(n,o),this.refs.form.getDOMNode())},removeForm:function removeForm(){this.refs.form&&e.unmountComponentAtNode(this.refs.form.getDOMNode())},render:function render(){var t=o("rc-FileUploader",this.props.className);return e.createElement("div",{className:t},e.createElement("div",{ref:"form"}))}});module.exports=p});