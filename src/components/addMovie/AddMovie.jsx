import { useState, useContext } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovie.module.css";
import { useNavigate } from "react-router-dom";
import MoviesContext from "../context/MoviesContext";

function AddMovie() {
  const [formData, setFormData] = useState({ title: "", date: "" });
  const [errors, setErrors] = useState({ title: false, date: false });
  const { movies, setMovies } = useContext(MoviesContext);
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validated = () => {
    const newErrors = { title: false, date: false };
    if (!formData.title) {
      newErrors.title = true;
    }
    if (!formData.date) {
      newErrors.date = true;
    }
    setErrors(newErrors);
    return !newErrors.title && !newErrors.date;
  };

  const addMovie = () => {
    const movie = {
      id: Date.now().toString(),
      title: formData.title,
      year: formData.date,
      type: "movie",
      poster: "https://picsum.photos/200/300",
    };
    setMovies([...movies, movie]);
    navigation("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validated()) {
      addMovie();
      setFormData({ title: "", date: "" });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input_form}
          placeholder="Masukkan Title Film"
          id="title"
          type="text"
          value={formData.title}
          name="title"
          onChange={handleChange}
        />
        {errors.title && <Alert>Title Wajib Diisi</Alert>}

        <input
          className={styles.input_form}
          placeholder="Masukkan Date"
          id="date"
          type="text"
          value={formData.date}
          name="date"
          onChange={handleChange}
        />
        {errors.date && <Alert>Tanggal Wajib Diisi</Alert>}
        <button className={styles.button_form}>Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
