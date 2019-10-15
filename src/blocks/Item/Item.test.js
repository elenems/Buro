import React from "react";
import { shallow, mount } from "enzyme";
import {Item} from './Item.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

describe("Item", () => {
  const props = {
      match:{
          params:{
              id:'LiGxMrmR2JKRceJnpqnh'
          }
      }
  }
  const item = {
    id:1,
    title:'Title',
    date: new Date().toLocaleDateString(),
    imgUrl:'someurl',
    location:"Lviv"
}

  it("Matches snapshot", () => {
      const wrapper = shallow(<Item {...props}/>)
      expect(wrapper).toMatchSnapshot();
  });

  it("Sets message", ()=>{
      const wrapper = shallow(<Item {...props}/>);
      wrapper.instance().showMessage();
      expect(wrapper.state('message')).toEqual('Успішно відправлено')
  })

  it("Renders box when item passed", ()=>{
    const wrapper = shallow(<Item {...props}/>);
   
    wrapper.setState({
        item
    })
    expect(wrapper.find(Grid).length).toBe(1)
  })

  it("Renders message", ()=>{
    const wrapper = shallow(<Item {...props}/>);
    wrapper.setState({
        item,
        message:"Some message"
    })
    expect(wrapper.find(Typography).last().text()).toBe('Some message');
  })

  it('Loads item date from server', async ()=>{
    const wrapper = mount(<Item {...props}/>);

    const val = await wrapper.instance().componentDidMount()
 
  })
});
