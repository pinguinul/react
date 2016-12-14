/**
 * Created by Andra on 16-Nov-16.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import './helpers/chai-enzyme';
import Subtab from '../src/components/subtab/subtab';

describe('<Subtab />', () => {
    it('has default label Subtab', () => {
        const mySubtab = shallow(
            <Subtab id={1} />
        );

        expect(mySubtab.instance().props.label).to.equal('Subtab');
    });
    it('has label equal to Shopping', () => {
        const mySubtab = shallow(
            <Subtab id={1} label="Shopping" />
        );
        expect(mySubtab.instance().props.label).to.equal('Shopping');
    });
});
