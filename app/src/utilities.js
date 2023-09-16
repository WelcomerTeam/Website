export function getHexColor(number) {
    return "#" + (number >>> 0).toString(16).slice(-6);
}

export function getSuccessToast() {
    return {
        title: "Changes saved.",
        icon: "check",
        class: "text-green-500 bg-green-100",
    }
}

export function getErrorToast(error) {
    return {
        title: error,
        icon: "xmark",
        class: "text-red-500 bg-red-100",
    }
}