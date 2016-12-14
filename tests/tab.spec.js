/**
 * Created by Andra on 02-Nov-16.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import './helpers/chai-enzyme';
import Tab from '../src/components/tab/tab';

describe('<Tab />', () => {
    it('has the child label', () => {
        const myTab = shallow(
            <Tab iconUrl="http://www.megaicons.net/static/img/icons_sizes/118/268/24/picframe-icon.png" id={1} />
        );

        expect(myTab.contains(<label htmlFor="name">Tab</label>)).to.equal(true);
    });
    it('is not selected', () => {
        const myTab = shallow(
            <Tab iconUrl="http://www.megaicons.net/static/img/icons_sizes/118/268/24/picframe-icon.png" id={1} />
        );
        expect(myTab.hasClass('selected')).to.equal(false);
    });
    it('is selected', () => {
        const myTab = shallow(
            <Tab
                iconUrl="http://www.megaicons.net/static/img/icons_sizes/118/268/24/picframe-icon.png"
                selected
                id={1}
            />
        );
        expect(myTab.hasClass('selected')).to.equal(true);
    });
});
