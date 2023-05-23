import { NewsHeaderCard } from 'react-ui-cards';
import "../App.css";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;


const Fundamental = ({ date, Status, icon, maxcelcius, mincelcius }) => {
    const av = `Max Sıcaklık ${maxcelcius} / Min Sıcaklık ${mincelcius}`;
    return (
        <>
            <CardContainer>

                    <NewsHeaderCard className='card'
                        thumbnail={icon}
                        title={Status}
                        author={av}
                        date={date}
                    />
            </CardContainer>
        </>

    )
}

export default Fundamental