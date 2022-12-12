import React, {useState} from "react";
import c from "./Calculator.module.css";
import {toolDivide, toolMultiply, toolSubtract, toolSum} from "./Manipulation";


let Calculator = () => {
    let [number, setNumber] = useState([]);
    let [disable, setDisable] = useState(false);
    let [arrayNumbers, setArrayNumbers] = useState([]);

    let [tool, setTool] = useState('');
    let [accept, setAccept] = useState(false);

    let resetButton = () => {
        setNumber([]);
        setArrayNumbers([]);
        setTool('')
        setAccept(false);
        setDisable(false);
    }


    let acceptArrayNumbers = () => {
        if (accept && arrayNumbers.length < 2) {

            if (Number.isNaN(arrayNumbers[0]) || Number.isNaN(arrayNumbers[1])) {
                return setDisable(true);
            } else {
                setArrayNumbers([...arrayNumbers, parseFloat(number.join(''))]);
                setNumber([]);
                setDisable(false);
                setAccept(false);
            }
        }
    }

    let mainTool = () => {
        if (arrayNumbers.length === 2) {
            switch (tool) {
                case 'plus': {
                    let response = toolSum(arrayNumbers[0], arrayNumbers[1]);
                    setAccept(false);
                    setNumber([response]);
                    setArrayNumbers([]);
                    setTool('');
                    break;
                }
                case  'minus': {
                    let response = toolSubtract(arrayNumbers[0], arrayNumbers[1]);
                    setAccept(false);
                    setNumber([response]);
                    setArrayNumbers([]);
                    setTool('');

                    break;
                }
                case 'multiply': {
                    let response = toolMultiply(arrayNumbers[0], arrayNumbers[1]);
                    setAccept(false);
                    setNumber([response]);
                    setArrayNumbers([]);
                    setTool('');
                    break;
                }
                case 'divide': {
                    let response = toolDivide(arrayNumbers[0], arrayNumbers[1]);
                    setAccept(false);
                    setNumber([response]);
                    setArrayNumbers([]);
                    setTool('');
                    break;
                }
            }
        }
    }

    // console.log('accept: ', accept)
    // console.log('number:', number)
    // console.log('array:', arrayNumbers)

    acceptArrayNumbers();

    return (
        <div className={c.wrapper}>
            <div className={c.wrapper_box}>
                <div className={c.box}>
                    <div className={c.screen}>
                        <input value={number.join('')} onChange={(e) => {
                            setNumber([parseInt(e.target.value)])
                        }}/>
                    </div>
                    <div className={c.panel_tool}>

                        <button onClick={() => {
                            if (number.length === 0) {
                                if (arrayNumbers[0] != null) {
                                    setTool('plus');
                                    setAccept(true);
                                    setNumber([...number, arrayNumbers[0]])
                                } else return;
                            } else {
                                setTool('plus');
                                setAccept(true);
                            }
                        }}>+
                        </button>
                        <button onClick={() => {
                            if (number.length === 0) {
                                setNumber([...number, '-'])
                            } else {
                                setTool('minus');
                                setAccept(true);
                            }
                        }}>-
                        </button>
                        <button onClick={() => {
                            if (number.length === 0) {
                                if (arrayNumbers[0] != null) {
                                    setTool('multiply');
                                    setAccept(true);
                                    setNumber([...number, arrayNumbers[0]])
                                } else return;

                            } else {
                                setTool('multiply');
                                setAccept(true);
                            }
                        }}>x
                        </button>
                        <button onClick={() => {
                            if (number.length === 0) {
                                if (arrayNumbers[0] != null) {
                                    setTool('divide');
                                    setAccept(true);
                                    setNumber([...number, arrayNumbers[0]])
                                } else return;
                            } else {
                                setTool('divide');
                                setAccept(true);
                            }
                        }}>/
                        </button>
                        <button onClick={() => {
                            if (arrayNumbers.length > 0) {
                                setAccept(true);
                                mainTool();
                            }

                        }}>= (2 click)
                        </button>
                    </div>
                    <div className={c.panel_number}>
                        <button onClick={() => {
                            setNumber([...number, 9])
                        }}>9
                        </button>
                        <button onClick={() => {
                            setNumber([...number, 8])
                        }}>8
                        </button>
                        <button onClick={() => {
                            setNumber([...number, 7])
                        }}>7
                        </button>
                        <button onClick={() => {
                            setNumber([...number, 6])
                        }}>6
                        </button>
                        <button onClick={() => {
                            setNumber([...number, 5])
                        }}>5
                        </button>
                        <button onClick={() => {
                            setNumber([...number, 4])
                        }}>4
                        </button>
                        <button onClick={() => {
                            setNumber([...number, 3])
                        }}>3
                        </button>
                        <button onClick={() => {
                            setNumber([...number, 2])
                        }}>2
                        </button>
                        <button onClick={() => {
                            setNumber([...number, 1])
                        }}>1
                        </button>
                        <button onClick={() => {
                            setNumber([...number, 0])
                        }}>0
                        </button>
                        <button onClick={() => {
                            if (!disable) {
                                if (number.length === 0) {
                                    setNumber([...number, '0.'])
                                    setDisable(true);
                                } else {
                                    setNumber([...number, '.'])
                                    setDisable(true);
                                }
                            } else return
                        }}>.
                        </button>
                        <button onClick={() => {
                            resetButton()
                        }}>res
                        </button>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default Calculator;
