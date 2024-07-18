import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}
  render() {
    let { data } = this.props;
    let { count } = this.state;
    const increaseCount = () => {};
    return (
      <div className='h-[600px] w-[300px] rounded-lg border-s-gray-200 shadow-md'>
        <div className='content'>
          <div className='name'>This is from class component</div>
          <div>{count}</div>
          <div>
            <button
              onClick={() => {
                this.setState({
                  count: this.state.count + 1,
                });
              }}
            >
              Increase Count
            </button>
          </div>
          <div className='data'>{data}</div>
        </div>
      </div>
    );
  }
}

export default UserClass;
