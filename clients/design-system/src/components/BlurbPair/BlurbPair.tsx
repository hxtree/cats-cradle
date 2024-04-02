import React from "react";
import './style.module.scss';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "../Button/Button";

export enum BlurbIconColors {
  BLUE = 'blue',
  ORANGE = 'orange',
  GREEN = 'green',
  PURPLE = 'purple',
}

export type BlurbPairProps = {
  iconRight: IconDefinition;
  iconColorRight?: BlurbIconColors;
  textRight: React.ReactNode | string;
  linkRight?: string;
  ctaRight?: string;
  iconLeft: IconDefinition;
  iconColorLeft?: BlurbIconColors;
  textLeft: React.ReactNode | string;
  linkLeft?: string;
  ctaLeft?: string;
}

export const BlurbPair = (props: BlurbPairProps) => {
  const {
    iconLeft, iconColorLeft, textLeft, linkLeft, ctaLeft,
    iconRight, iconColorRight, textRight, linkRight, ctaRight
  } = props;

  function determineIconColor(color?: BlurbIconColors) {
    return 'icon icon-color-' + (color || BlurbIconColors.BLUE);
  }

  const iconRightColorClass = determineIconColor(iconColorRight);
  const iconLeftColorClass = determineIconColor(iconColorLeft);

  return (
    <div className={`blurb container`}>
      <div className={`row gx-5`}>
        <div className="blurb-pair-left col-12 col-md-6 border-end border-1 p-5 text-left">
          <FontAwesomeIcon icon={iconLeft} size={'6x'} className={iconLeftColorClass}/>
          <p className="lead mt-4">
            {textLeft}
          </p>
          {linkLeft && ctaLeft && <Button color="secondary" href={linkLeft}>{ctaLeft}</Button>}
        </div>
        <div className="blurb-pair-right col-12 col-md-6 border-start border-1 p-5 text-left">
          <FontAwesomeIcon icon={iconRight} size={'6x'} className={iconRightColorClass}/>
          <p className="lead mt-4">
            {textRight}
          </p>
          {linkRight && ctaRight && <Button color="secondary" href={linkRight}>{ctaRight}</Button>}
        </div>
      </div>
    </div>
  )
}

export default BlurbPair;