import '../scss/core/Variables.scss';
import '../scss/layout/Main.scss';
import Hero from './Hero.jsx';
import Preview from './Preview.jsx';
import Form from './Form.jsx';
import ButtonSeeProjects from './ButtonSeeProjects.jsx';
import PropTypes from 'prop-types';

function Main({
  handleInput,
  setFormData,
  formData,
  handleClickCreateCard,
  hideCardLink,
  cardLink,
  handleClearForm,
  setImageSize,
  imageSize,
  missingImage
}) {
  return (
    <main className="main">
      <Hero />
      <ButtonSeeProjects />
     <div className='main__container'>
     <Preview formData={formData} />
      <Form
        handleInput={handleInput}
        formData={formData}
        setFormData={setFormData}
        handleClickCreateCard={handleClickCreateCard}
        hideCardLink={hideCardLink}
        cardLink={cardLink}
        handleClearForm={handleClearForm}
        setImageSize={setImageSize}
        imageSize={imageSize}
        missingImage={missingImage}
      />
     </div>
    </main>
  );
}
Main.propTypes = {
  handleInput: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleClickCreateCard: PropTypes.func.isRequired,
  hideCardLink: PropTypes.string.isRequired,
  cardLink: PropTypes.string,
  handleClearForm: PropTypes.func.isRequired,
  setImageSize: PropTypes.func.isRequired,
  imageSize: PropTypes.string.isRequired,
  missingImage: PropTypes.string.isRequired
};

export default Main;