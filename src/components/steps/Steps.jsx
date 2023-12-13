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
          <span>Step 1 : Cart Review</span>
        </div>
        <div className="steps-item">
          <div className="rounded green">
            <Done />
          </div>
          <span>Step 2 : Checkout</span>
        </div>
        <div className="steps-item progress">
          <div className="rounded current">3</div>
          <span>Step 3 : Special Offer</span>
        </div>
        <div className="steps-item">
          <div className="rounded default">4</div>
          <span>Step 4 : Confirmation</span>
        </div>
      </div>
    </section>
  );
};

export default Steps;
