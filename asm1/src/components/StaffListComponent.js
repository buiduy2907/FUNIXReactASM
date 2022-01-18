import React,{Component} from 'react';
import {CardText,Card,CardBody,CardTitle} from 'reactstrap'
import dateFormat from 'dateformat'


class StaffList extends Component{
    constructor(props){
        super(props);

        this.state={
            selectedStaff:null,
            className:'col-lg-4'
        }
    }
    onStaffSelect(staff){
        this.setState({
            selectedStaff:staff
        })

    }
    onSet2(){
        this.setState({
            className: 'col-lg-6'
        })
    }
    onSet3(){
        this.setState({
            className: 'col-lg-4'
        })
    }
    onSet6(){
        this.setState({
            className: 'col-lg-2'
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
    render(){
        const liststaff= this.props.staffs.map((staff)=>{
            return(
                <div className={this.state.className}>
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
    