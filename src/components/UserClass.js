import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { data } = this.props;
    return (
      <div className='h-[600px] w-[300px] rounded-lg border-s-gray-200 shadow-md'>
        <div className='content'>
          <div className='name'>This is from class component</div>

          <div className='data'>{data}</div>
        </div>
      </div>
    );
  }
}

export default UserClass;
