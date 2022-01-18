import React,{Component} from 'react';
import {CardText,Card,CardBody,CardTitle} from 'reactstrap'
import dateFormat from 'dateformat'


class StaffList extends Component{
    constructor(props){
        super(props);

        this.state={
            selectedStaff:null,
        }
    }
    onStaffSelect(staff){
        this.setState({
            selectedStaff:staff
        })

    }


    renderStaff(staff){
        if(staff!=null){
            const department = staff.department.name;
            return(
                <div className='my-1'>
                    <h2>Họ và tên: {staff.name}</h2>
                    <div>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</div>
                    <div>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</div>
                    <div>Phòng ban{department}</div>
                    <div>Số ngày nghỉ còn lại: {staff.annualLeave}</div>
                    <div>Số ngày đã làm thêm: {staff.overTime}</div>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )   
        }
    }
    // onSet2(){
    //     const liststaff= this.props.staffs.map((staff)=>{
    //         return(
    //             <div className='col-6'>
    //                 <div key={staff.id}>
    //                     <div onClick={()=>this.onStaffSelect(staff)}>{staff.name}</div>
    //                 </div>
    //             </div>             
    //         )     
    //     })
    // }
    // onSet3(){
    //     const liststaff= this.props.staffs.map((staff)=>{
    //         return(
    //             <div className='col-4'>
    //                 <div key={staff.id}>
    //                     <div onClick={()=>this.onStaffSelect(staff)}>{staff.name}</div>
    //                 </div>
    //             </div>             
    //         )
    //     }) 
    // }
    // onSet6(){
    //     const liststaff= this.props.staffs.map((staff)=>{
    //         return(
    //             <div className='col-2'>
    //                 <div key={staff.id}>
    //                     <div onClick={()=>this.onStaffSelect(staff)}>{staff.name}</div>
    //                 </div>
    //             </div>             
    //         )   
    //     })
    // }
    render(){
        const liststaff= this.props.staffs.map((staff)=>{
            return(
                <div className='col-12 col-xs-6 col-md-6 col-lg-4'>
                    <div key={staff.id}>
                        <div onClick={()=>this.onStaffSelect(staff)}>{staff.name}</div>
                    </div>
                </div>             
            )
        });
        return(
            <div className="container">
                <div className="row">  
                    {liststaff}
                    <input type="button" value={2} onClick={()=>this.onSet2()}></input>
                    <input type="button" value={3} onClick={()=>this.onSet3()}></input>
                    <input type="button" value={6} onClick={()=>this.onSet6()}></input>
                </div>
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        )
    }
}

export default StaffList; 
    