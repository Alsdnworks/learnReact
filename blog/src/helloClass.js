import React,{Component} from 'react';

class HelloClass extends Component{
  //클래스형 컴포넌트에는 render메서드가 있어야한다 
  //이 메소드는 render를 원하는 JSX를 리턴한다
  render(){
    const{color,name,isSpecial}=this.props;
    return(
      <div style={{color}}>
        {isSpecial && <b>*</b>}
        Hello{name}
      </div>
    );
  }
}
//클래스형 컴포넌트에서도 기존의 함수형 컴포넌트에서와 같은 방식으로 가능
HelloClass.defaultProps={
  name: ' noname'
};

export default HelloClass;