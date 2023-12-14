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
          <p><span>Step 1 :</span> Cart Review</p>
        </div>
        <div className="steps-item">
          <div className="rounded green">
            <Done />
          </div>
          <p><span>Step 2 :</span> Checkout</p>
        </div>
        <div className="steps-item progress">
          <div className="rounded current">3</div>
          <p><span>Step 3 :</span> Special Offer</p>
        </div>
        <div className="steps-item">
          <div className="rounded default">4</div>
          <p><span>Step 4 :</span> Confirmation</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
