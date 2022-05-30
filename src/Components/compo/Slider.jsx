import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip
  } from '@chakra-ui/react'

const SliderExp = ({val, col, slideval}) => {
    const [sliderValue, setSliderValue] = React.useState(val)
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
      <Slider
      isDisabled={true}
      id='slider'
      defaultValue={val}
      min={0}
      max={100}
      colorScheme={col}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={slideval} mt='1' ml='-2.5' fontSize='sm'>
         {slideval}%
        </SliderMark>
      
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='teal.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    )
  }
  export default SliderExp