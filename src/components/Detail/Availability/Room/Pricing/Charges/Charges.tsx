import React, { FunctionComponent } from "react";
import { Box, Typography } from "@material-ui/core";
import { Rate, BreakdownCharge } from "../Pricing";
import Keys from "@hotels/translation-keys";
import Translation from "@hotels/translation";

export interface Props {
  rate: Rate;
}

const Charges: FunctionComponent<Props> = (props) => {
  const baseRateCharge: BreakdownCharge = props.rate.breakdown.charges.filter(
    (charge) => charge.type === "BASE_RATE"
  )[0];
  const otherCharges: Array<BreakdownCharge> = props.rate.breakdown.charges.filter(
    (charge) => charge.type !== "BASE_RATE"
  );

  const baseRate: JSX.Element | null = baseRateCharge ? (
    <Box>
      <Typography variant="subtitle2">
        <Translation
          tkey={Keys.detail.rate_night}
          quantity={props.rate.nights}
          values={{ n: props.rate.nights }}
        />
        : {baseRateCharge.price.amount} {baseRateCharge.price.currency}
      </Typography>
    </Box>
  ) : null;

  const charges: Array<JSX.Element> = otherCharges.map((charge, index) => {
    return (
      <Box key={index}>
        <Typography variant="subtitle2">{charge.description}</Typography>
      </Box>
    );
  });

  return (
    <Box>
      {baseRate}
      {charges}
    </Box>
  );
};

export default Charges;
