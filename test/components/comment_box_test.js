/**
 * Created by reube on 02/07/2017.
 */
import { renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// use chai-jquery for api help

describe('CommentBox', () => {

    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering some text', () => {

        beforeEach(() => {
           component.find('textarea').simulate('change', 'new comment');
        });

        it('shows that text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('when submitted, clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });

    })

});