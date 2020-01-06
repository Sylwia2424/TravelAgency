import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('propsId have to correct id = abc', () => {
    const propsId ='abc';
    const component = shallow(<TripSummary id={propsId} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${propsId}`);
  });

  it('img should render correct src, alt', () => {
    const correctSrc = 'image';
    const correctAlt = 'text';
    const component = shallow(<TripSummary imageSrc={correctSrc} imageAlt={correctAlt} />);
  
    expect(component.find('.image').prop('src')).toEqual(correctSrc);
    expect(component.find('.image').prop('src')).toEqual(correctAlt);
  });

  it('should render props name cost and days', () => {
    const component = shallow(<TripSummary name = 'Lorem Ipsum' cost = '100' days = {10}/>);
    expect(component.find('.details span').at(0).text()).toEqual(`Lorem Ipsum`);
    expect(component.find('.details span').at(1).text()).toEqual(`from ${'100'}`);
    expect(component.find('.title').at(2).text()).toEqual(`${10} days`);

  });
  
  it('should render tags array correctly', () => {
    const expectedArray = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedArray} />);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedArray[2]);
  });

  it('should render tags div if tags is truthy', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags')).toBeTruthy();
  });
});