import { Dispatch, MutableRefObject, SetStateAction, useEffect, useMemo, useRef, useState } from "react";

export function useStateAndRef<T>(initialState: T): [T, Dispatch<SetStateAction<T>>, MutableRefObject<T>] {
    const [state, setState] = useState<T>(initialState);
    const reference = useRef(initialState);

    useEffect(
        () => {
            reference.current = state;
        },
        [state]
    );

    return useMemo(
        () => [state, setState, reference],
        [state]
    );
}
