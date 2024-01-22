import React, { useState } from 'react';
import styled from 'styled-components';

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #ff9a9e, #fad0c4);
`;
const Container = styled.div`
  width: 70%;
  background-color: #f6f6f6;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CenteredButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const HorizontalButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const StyledSubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledRefillButton = styled.button`
  padding: 12px 24px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b02a37;
  }
`;

const RangeLabels = styled.datalist`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const RangeLabel = styled.label`
  font-size: 12px;
  color: #555;
`;

const Question = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
`;

const Input = styled.input`
  width: calc(100% - 12px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
  }
`;

function SurveyForm() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 7;
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    photo: '',
    experience: '',
    experienceRange: '',
    interests: [],
  });

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev < totalQuestions ? prev + 1 : prev));
  };
  
  const handlePrevQuestion = () => {
    setCurrentQuestion((prev) => (prev > 1 ? prev - 1 : prev));
  };
  
  const handleFinalSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!', formData);
    window.alert('Form submitted!');
    setFormData({
      name: '',
      dateOfBirth: '',
      photo: '',
      experience: '',
      experienceRange: '',
      interests: [],
    });
    setCurrentQuestion(1);
  };
  
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    setFormData((prevData) => {
      if (type === 'checkbox') {
        if (checked) {
          return {
            ...prevData,
            [name]: [...(prevData[name] || []), value],
          };
        } else {
          return {
            ...prevData,
            [name]: (prevData[name] || []).filter((item) => item !== value),
          };
        }
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  return (
    <CenteredWrapper>
    <Container>
      <form>
        <Question style={{ display: currentQuestion === 1 ? 'block' : 'none' }}>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </Question>
        <Question style={{ display: currentQuestion === 2 ? 'block' : 'none' }}>
          <Label htmlFor="dateOfBirth">Date of Birth:</Label>
          <Input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
        </Question>
        <Question style={{ display: currentQuestion === 3 ? 'block' : 'none' }}>
          <Label htmlFor="photo">Upload Photo:</Label>
          <Input type="file" id="photo" name="photo" accept="image/*" onChange={handleInputChange} />
        </Question>
        <Question style={{ display: currentQuestion === 4 ? 'block' : 'none' }}>
          <Label htmlFor="experience">Years of Experience:</Label>
          <Input type="number" id="experience" name="experience" value={formData.experience} onChange={handleInputChange} />
        </Question>
        <Question style={{ display: currentQuestion === 5 ? 'block' : 'none' }}>
          <Label htmlFor="experienceRange">Rank your skill in your domain:</Label>
          <Input type="range" id="experienceRange" name="experienceRange" min="1" max="10" value={formData.experienceRange} onChange={handleInputChange} list="tickmarks" />
          <RangeLabels id="tickmarks">
            <RangeLabel>1</RangeLabel>
            <RangeLabel>2</RangeLabel>
            <RangeLabel>3</RangeLabel>
            <RangeLabel>4</RangeLabel>
            <RangeLabel>5</RangeLabel>
            <RangeLabel>6</RangeLabel>
            <RangeLabel>7</RangeLabel>
            <RangeLabel>8</RangeLabel>
            <RangeLabel>9</RangeLabel>
            <RangeLabel>10</RangeLabel>
          </RangeLabels>
          <p>Selected Skill Level: {formData.experienceRange}</p>
        </Question>
        <Question style={{ display: currentQuestion === 6 ? 'block' : 'none' }}>
          <Label>Interested or Professional in:</Label>
          <Input type="checkbox" id="interest1" name="interests" value="Web/Andriod Development" checked={formData.interests.includes('Web/Andriod Development')} onChange={handleInputChange} />
          <Label htmlFor="interest1">Web/Andriod Development</Label>
          <Input type="checkbox" id="interest2" name="interests" value="Designing UI/UX" checked={formData.interests.includes('Designing UI/UX')} onChange={handleInputChange} />
          <Label htmlFor="interest2">Designing UI/UX</Label>
          <Input type="checkbox" id="interest3" name="interests" value="AI/ML Developer" checked={formData.interests.includes('AI/ML Developer')} onChange={handleInputChange} />
          <Label htmlFor="interest3">AI/ML Developer</Label>
          <Input type="checkbox" id="interest4" name="interests" value="CyberSecurity" checked={formData.interests.includes('CyberSecurity')} onChange={handleInputChange} />
          <Label htmlFor="interest4">CyberSecurity</Label>
        </Question>
        <Question style={{ display: currentQuestion === 7 ? 'block' : 'none' }}>
          <h3>Review Your Choices</h3>
          <p>Name: {formData.name}</p>
          <p>Date of Birth: {formData.dateOfBirth}</p>
          <p>Years of Experience: {formData.experience}</p>
          <p>Skill Level: {formData.experienceRange}</p>
          <p>Interests: {formData.interests.join(', ')}</p>
        </Question>
        <div>
          {currentQuestion > 1 && (
            <button type="button" onClick={handlePrevQuestion}>
              Previous
            </button>
          )}
          {currentQuestion < totalQuestions ? (
            <button type="button" onClick={handleNextQuestion}>
              Next
            </button>
          ) : (
            <CenteredButtonContainer>
              <HorizontalButtonContainer>
                <StyledSubmitButton type="button" onClick={handleFinalSubmit}>
                  Submit
                </StyledSubmitButton>
                <StyledRefillButton onClick={() => setCurrentQuestion(1)}>
                  Refill the Form
                </StyledRefillButton>
              </HorizontalButtonContainer>
            </CenteredButtonContainer>
          )}
        </div>
      </form>
    </Container>
  </CenteredWrapper>
);
}

export default SurveyForm;
