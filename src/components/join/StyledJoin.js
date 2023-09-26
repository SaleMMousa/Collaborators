import styled from "styled-components";

export const JoinSection = styled.div`
    background:  #FAFAFB;    
    width: 100%;
    padding: 52px;
    margin: 50px auto;
    display: flex;
    padding: 52px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;
export const EmailContainer = styled.div`
    margin-top: 15px;
    background: #fff ;
    display: flex;
    padding: 6px 16px ;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
    border-radius: 6px;
    border: 1px solid #CBCBCB;
    margin-bottom: 50px;
`;
export const StyledInput = styled.input`
border: none;
width: 400px;
@media (max-width: 768px) {
    width: 200px; 
  }
`
export const StyledButton = styled.button`
  display: flex;
  align-items: center; 
  background: transparent;
  color: #000;
  border: none;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  line-height: 28px;
`;