import { useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ onClose, handleEditProfile, activeModal }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const { values, handleChange } = useForm({
    name: currentUser.user?.name,
    avatar: currentUser.user?.avatar,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile(values);
  };

  return (
    <ModalWithForm
      title="Change profile data"
      name="edit-profile"
      buttonText="Save changes"
      onClose={onClose}
      activeModal={activeModal}
      onSubmit={handleSubmit}
    >
      <fieldset className="modal__text-inputs">
        <label htmlFor="name" className="modal__form-label">
          Name*
          <input
            className="modal__form-input"
            id="name"
            type="text"
            placeholder="New name"
            name="name"
            value={values.name}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="avatar" className="modal__form-label">
          Avatar*
          <input
            className="modal__form-input"
            id="avatar"
            type="url"
            placeholder="New avatar URL"
            name="avatar"
            value={values.avatar}
            required
            onChange={handleChange}
          />
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
