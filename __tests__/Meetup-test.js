import React from 'react';
import { shallow } from 'enzyme';
import ConnectedMeetup, { Meetup } from '../src/components/meetup'

jest.dontMock('../src/components/meetup.js');

describe("Meetup Component", () => {
  it("renders loading message when no meetup event is pulled from data", () => {
    const props = {
      fetchNextMeetupEvent: jest.fn()
    }

    const wrapper = shallow( <Meetup {...props} /> );

    expect(wrapper.find('div.loading').length).toBe(1);
  });

  it("renders meetup when you have a meetup event", () => {
    const props = {
      fetchNextMeetupEvent: jest.fn(),
      meetup: {
        name: 'First Event',
        description: 'Join us for a great time!',
        link: 'http://example.com'
      }
    }

    const wrapper = shallow( <Meetup {...props} /> );

    expect(wrapper.find('div.event-information').length).toBe(1);
    expect(wrapper.find('h2.event-title').text()).toBe(props.meetup.name);
  });
});