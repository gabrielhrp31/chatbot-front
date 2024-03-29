import { Form as FormikForm} from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;

    width:100%;
    min-height:100vh;
    height:fit-content;
    max-width:1000px;

    background-color:var(--background-messages);
`;

export const Form = styled(FormikForm)`
    display:flex;
    flex-direction:column;
`;