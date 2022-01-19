import React,{Component} from 'react';
import {CardText,Card,CardBody,CardTitle,CardImg} from 'reactstrap'
import dateFormat from 'dateformat'


class StaffList extends Component{
    constructor(props){
        super(props);

        this.state={
            selectedStaff:null,
            colSet:'col-xs-12 col-sm-6 col-md-4 col-lg-4'
        }
    }
    onStaffSelect(staff){
        this.setState({
            selectedStaff:staff
        })

    }
    onSet2(){
        this.setState({
            colSet: 'col-xs-12 col-sm-6 col-md-6 col-lg-6'
        })
    }
    onSet3(){
        this.setState({
            colSet: 'col-xs-12 col-sm-4 col-md-4 col-lg-4'
        })
    }
    onSet6(){
        this.setState({
            colSet: 'col-xs-12 col-sm-2 col-md-2 col-lg-2'
        })
    }

    renderStaff(staff){
        if(staff!=null){
            const department = staff.department.name;
            return(
                <Card className='my-1'>
                    <CardTitle className='h4'>Họ và tên: {staff.name}</CardTitle>
                    <CardBody>
                        <CardTitle>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</CardTitle>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban{department}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </CardBody>
                </Card>
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
                <div className={this.state.colSet}>
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
                </div>
                <div className='my-2'>
                    <h5>Hiển thị trang:</h5>
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
    