import { Done } from "@mui/icons-material";
import "./steps.css";

const Steps = () => {
  return (
    <section className="steps">
      <div className="steps-container">
        <div className="steps-item">
          <div className="rounded green">
            <Done />
          </div>
          <span><p>Step 1 :</p> Cart Review</span>
        </div>
        <div className="steps-item">
          <div className="rounded green">
            <Done />
          </div>
          <span><p>Step 2 :</p> Checkout</span>
        </div>
        <div className="steps-item progress">
          <div className="rounded current">3</div>
          <span><p>Step 3 :</p> Special Offer</span>
        </div>
        <div className="steps-item">
          <div className="rounded default">4</div>
          <span><p>Step 4 :</p> Confirmation</span>
        </div>
      </div>
    </section>
  );
};

export default Steps;
