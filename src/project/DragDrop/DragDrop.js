import React, {useEffect, useRef, useState} from "react";
import d from "./DragDrop.module.css";


let changePlace = (array, indexChangeBlock, indexBlock) => {
    let tmp = array[indexChangeBlock];
    array[indexChangeBlock] = array[indexBlock];
    array[indexBlock] = tmp;
    return array;
}

// const useEvent = (name, cb) => {
//     const ref = useRef(cb);
//     ref.current = cb;
//
//     useEffect(() => {
//         window.addEventListener(name, e => {
//             ref.current(e);
//         });
//     }, []);
// };


let counter = -1;

let DragDrop = () => {
    let [objects, setObjects] = useState([]);

    // let [objects, setObjects] = useState([
    //     {id: 0, x: 300, y: 0, mode: false, text: 'TEXT0'},
    //     {id: 1, x: 300, y: 100, mode: false, text: 'TEXT1'},
    //     {id: 2, x: 300, y: 200, mode: false, text: 'TEXT2'},
    //     {id: 3, x: 300, y: 300, mode: false, text: 'TEXT3'},
    //     {id: 4, x: 300, y: 400, mode: false, text: 'TEXT4'},
    // ]);

    const dragItem = useRef();
    const dragHoverItem = useRef();

    // useEvent('mouseup', (e) => {
    //     setObjects(objects.map(c => {
    //         if (c.id === objectId) {
    //             if (c.mode) {
    //                 return {...c, x: e.clientX, y: e.clientY, mode: false}
    //             }
    //         }
    //         return {...c}
    //     }))
    // });

    // useEvent('mousemove', (e) => {
    //     setObjects(objects.map(c => {
    //         if (c.id === objectId) {
    //             if (c.mode) {
    //                 return {...c, x: e.clientX, y: e.clientY }
    //             }
    //         }
    //         return {...c}
    //     }))
    // });

    const dragStart = (e, position, id_object) => {
        dragItem.current = position;
        setObjects(objects.map(o => {
            if (o.id === id_object) return {...o, mode: true}
            return {...o};
        }))
    }

    const dragEnter = (e, position) => {
        dragHoverItem.current = position;
        if (dragHoverItem.current !== dragItem.current) {
            let copyObjects = objects.map(o => {
                return {...o}
            });
            setObjects(changePlace(copyObjects, dragHoverItem.current, dragItem.current));
            dragItem.current = dragHoverItem.current;
        }
    }


    const drop = (e) => {
        let copyObjects = objects.map(o => {
            return {...o, mode: false}
        });
        dragItem.current = null;
        dragHoverItem.current = null;
        setObjects(copyObjects);
    }


    const addObject = () => {
        counter += 1;
        return setObjects([...objects, {
            id: counter,
            mode: false,
            text: `to do` + `${counter}`,
        }])
    }


    return (
        <div className={d.wrapper}>


            <div className={d.box}>
                <button onClick={() => {
                    addObject()
                }} className={d.button}>+
                </button>

                <div className={d.drop}>

                    {objects.map((o, idx) => {
                        return (
                            <div className={o.mode ? d.chosen_item + ' ' + d.drag_item : d.drag_item}
                                 draggable
                                 onDragStart={(e) => {
                                     dragStart(e, idx, o.id)
                                 }}
                                 onDragEnter={(e) => {
                                     dragEnter(e, idx)
                                 }}
                                 onDragEnd={drop}

                            >{o.text}</div>
                        )
                    })}
                </div>

            </div>


        </div>
    )
}


export {DragDrop};
