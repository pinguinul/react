/**
 * Created by Andra on 13-Dec-16.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import './helpers/chai-enzyme';
import Slider from '../src/components/slider/slider';

describe('<Slider />', () => {
    let mySlider;

    beforeEach(() => {
        mySlider = shallow(
            <Slider />
        );
    });

    it('has the child input[range]', () => {
        expect(mySlider.find('input[type="range"]')).to.have.length(1);
    });

    it('has the child input[number]', () => {
        expect(mySlider.find('input[type="number"]')).to.have.length(1);
    });

    it('has default value 0', () => {
        expect(mySlider.state().value).to.equal(0);
        expect(mySlider.find('input[type="range"]')).to.have.attr('value', '0');
    });

    it('has value 47 from input[range]', () => {
        mySlider.find('input[type="range"]').simulate('change', { target: { value: 47 } });
        expect(mySlider.state().value).to.equal(47);
        expect(mySlider.find('input[type="number"]')).to.have.value('47');
    });

    it('has value 47 from input[number]', () => {
        mySlider.find('input[type="number"]').simulate('change', { target: { value: 47 } });
        expect(mySlider.state().value).to.equal(47);
        expect(mySlider.find('input[type="range"]')).to.have.value('47');
    });

    it('has a different value (47)', () => {
        mySlider = shallow(
            <Slider value={47} />
        );
        expect(mySlider.state().value).to.equal(47);
        expect(mySlider.find('input[type="range"]')).to.have.value('47');
        expect(mySlider.find('input[type="number"]')).to.have.value('47');
    });
});
