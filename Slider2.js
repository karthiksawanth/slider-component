import React, {useState} from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import './Slider2.css'

const marks = [

    {
        value: '0',
        label: 'Min',
        top: '45'
    },
    {
        value: '35000',
        label: 'Max',
        top: '45'
    }
]

const useStyles = makeStyles(theme => ({

    margin: {
        width: 300,
        // marginTop: theme.spacing(10),
        marginLeft: "14px",
        "& .MuiSlider-root": {
            backgroundColor: "red"

        },
        "& .MuiSlider-thumb": {
            height: 15,
            width: 10,
            color: "white",
            borderRadius: 4,
            width: 10,
            height: 15,


            border: "1px solid #979797"
        },
        "& .MuiSlider-track": {
            height: 6,
            borderRadius: 4,
            backgroundColor: "#fafafa",

            border: "1px solid #dbd8d8"
        },
        "& .MuiSlider-markLabel": {
            fontSize: '12px',

        },
        "& .MuiSlider-mark": {
            backgroundColor: "transparent",


        },
        "& .MuiSlider-rail": {
            height: 6,
            backgroundColor: "gray",
            borderRadius: 4,
            border: "1px solid black"

        },
        "& .PrivateValueLabel-circle-5": {
            width: "32px",
            height: "32px",
            display: "contents",
        },
        "& .PrivateValueLabel-label-6": {
            fontSize: "12px",
            color: "black",



        },
        "& .PrivateValueLabel-offset-4": {
            top: "-10px",
            position: "absolute",

        },
        "& .MuiSlider-valueLabel": {
            left: -3
        }
    }


}));

const RangeSlider = () => {
    const classes = useStyles();
    const [sliderValue, newSliderValue] =useState(0);
    return (
        <div className="slider-component">
            <div className="total-hours">Total hours lost</div>


            <Slider
                className={classes.margin}
                defaultValue={[0, 35000]}
                min={0}
                max={35000}
                width={300}
                valueLabelDisplay="on"
                disabled={false}
                //   valueLabelDisplay="auto"
                marks={marks}

            />
           

        </div>
    );
}
export default RangeSlider;
