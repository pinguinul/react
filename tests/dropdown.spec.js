/**
 * Created by Andra on 16-Nov-16.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import './helpers/chai-enzyme';
import Dropdown from '../src/components/dropdown/dropdown';

should();

describe('<Dropdown />', () => {
    let myDropdown;

    beforeEach(() => {
        myDropdown = shallow(
            <Dropdown />
        );
    });

    it('has the child text', () => {
        expect(myDropdown.contains(<div className="text">Publish</div>)).to.equal(true);
    });

    it('has an arrow', () => {
        expect(myDropdown.contains(<div className="arrow" />)).to.equal(true);
    });

    it('is open', () => {
        myDropdown.simulate('mouseEnter');
        expect(myDropdown.state().open, 'has state open=true').to.equal(true);
        expect(myDropdown.find('.dropdown-list'), 'has child element dropdown list').to.not.be.blank();
    });

    it('is not open', () => {
        myDropdown.simulate('mouseLeave');
        expect(myDropdown.state().open).to.equal(false);
        expect(myDropdown.find('.dropdown-list'), 'does not have child element dropdown list').to.be.blank();
    });

    it('has the option: public', () => {
        myDropdown.simulate('mouseEnter');
        expect(myDropdown.find('.dropdown-list li').first(), 'first option = Public').text().to.equal('Public');
    });

    it('has the option: unlisted', () => {
        myDropdown.simulate('mouseEnter');
        expect(myDropdown.find('.dropdown-list').childAt(1), 'second option = Unlisted').text().to.equal('Unlisted');
    });

    it('has the option: save', () => {
        myDropdown.simulate('mouseEnter');
        expect(myDropdown.find('.dropdown-list li').last(), 'last option = Save').text().to.equal('Save');
    });

    it('has selected value: public', () => {
        const spy = sinon.spy();
        const options = [
            {
                label: 'Public',
                handler: spy,
            },
            {
                label: 'Unlisted',
                handler: null,
            },
            {
                label: 'Save',
                handler: null,
            },
        ];

        myDropdown = shallow(
            <Dropdown options={options} />
        );

        myDropdown.simulate('mouseEnter');
        const publicOption = myDropdown.find('.dropdown-list li a').first();
        publicOption.simulate('click');

        spy.should.have.been.called.exactly(1);
        expect(myDropdown.state().open).to.equal(false);
    });
});
