import Title from "@components/elements/Title";
import "./FormAds.css";
import Button from "@components/elements/Button";

const FormAds = ({ title, productName, handleSaveForm, handleSubmit }) => (
  <section className="formAds">
    <Title>{title}</Title>
    <p>
      Please, fill the following form in order to add a new ADS for the product{" "}
      <b>{productName}</b>.
    </p>
    <form onSubmit={handleSubmit} className="form">
      <div className="form__input">
        <input
          onChange={(e) => {
            handleSaveForm(e);
          }}
          type="text"
          placeholder="headline"
          id="headline"
          required
        />
        <textarea
          onChange={(e) => {
            handleSaveForm(e);
          }}
          placeholder="description"
          id="description"
          required
        />
        <input
          onChange={(e) => {
            handleSaveForm(e);
          }}
          type="text"
          placeholder="link"
          id="link"
          required
        />
        <textarea
          onChange={(e) => {
            handleSaveForm(e);
          }}
          placeholder="image links ( more than one it's possible with enters )"
          id="images"
          required
          value="http://dummyimage.com/500x500.png/cc0000/ffffff
          http://dummyimage.com/500x500.png/fb9977/ffffff
          http://dummyimage.com/500x500.png/cccccc/ffffff"
        />
      </div>

      <Button title="New Ad" type="submit">
        Add
      </Button>
    </form>
  </section>
);

export default FormAds;
