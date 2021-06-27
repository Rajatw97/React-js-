//reusable cmp fro create&edit
import React from 'react';
import {clearSubmitErrors, Field,reduxForm} from 'redux-form';

class StreamForm extends React.Component{

    renderError=({error,touched})=>{
        if(touched&&error){
            return(<div className="ui error message">
                    <div className="header">{error}</div>
            </div>);
        }

    }

    renderComp=({input,label,meta})=>{
        console.log(meta);
        // return <input onChange={formProps.input.onChange} value={formProps.input.value} />
        return( 
        <div className="field">
            <label style={{marginRight:'10px'}}>{label}</label>
            <input {...input} />
                {this.renderError(meta)}
           {/* <div>{meta.error}</div>  */}
        </div>)

    };
    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues);

    };

   render(){ 
    //    console.log(this.props);
       return (<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
       <Field name="title" component={this.renderComp} label="Enter Title:"/>
       <br></br>
       <Field name="description" component={this.renderComp} label="Enter Description"/>
       <button className="ui button primary">Submit</button>
       </form>
       );
   }

}
const validate=formValues=>{
    const errors={};
    if(!formValues.title)
        errors.title='You must enter a title';
    if(!formValues.description)
        errors.description='You must enter a description';    

     return errors;   

};
// export default reduxForm({form:'streamCreate',validate}) (StreamCreate);
export default reduxForm({form:'streamForm',validate}) (StreamForm);
