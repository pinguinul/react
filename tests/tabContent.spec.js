/**
 * Created by Andra on 16-Nov-16.
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import './helpers/chai-enzyme';
import TabContent from '../src/components/tab-content/tab-content';
import Subtab from '../src/components/subtab/subtab';

describe('<TabContent />', () => {
    let myTabContent;

    const subTabProps = [
        {
            id: 1,
            selected: true,
            label: 'Shopping',
        },
        {
            id: 2,
            selected: false,
            label: 'Social',
        },
        {
            id: 3,
            selected: false,
        },
    ];

    it('has title prop', () => {
        myTabContent = shallow(
            <TabContent title="Title" tabs={subTabProps} />
        );
        expect(myTabContent.find('.title')).to.not.be.blank();
    });

    it('has subtabs', () => {
        myTabContent = mount(
            <TabContent title="Title" tabs={subTabProps} />
        );
        subTabProps.forEach((prop) => {
            expect(myTabContent).to.contain(
                <Subtab
                    key={prop.id}
                    {...prop}
                    onClickSubtabButtonHandler={myTabContent.instance().onClickSubtabButtonHandler}
                />
            );
        });
    });
});
