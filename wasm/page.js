import { getMetaContents } from './snippets/dioxus-cli-config-c2775606adf80e62/inline0.js';
import { RawInterpreter } from './snippets/dioxus-interpreter-js-ce7056f341163470/inline0.js';
import { setAttributeInner } from './snippets/dioxus-interpreter-js-ce7056f341163470/src/js/set_attribute.js';
import { get_select_data } from './snippets/dioxus-web-fe956e4b19891335/inline0.js';
import { WebDioxusChannel } from './snippets/dioxus-web-fe956e4b19891335/src/js/eval.js';
import * as __wbg_star0 from './snippets/dioxus-interpreter-js-ce7056f341163470/src/js/patch_console.js';

let wasm;

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function _assertBigInt(n) {
    if (typeof(n) !== 'bigint') throw new Error(`expected a bigint argument, found ${typeof(n)}`);
}

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error(`expected a boolean argument, found ${typeof(n)}`);
    }
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error(`expected a number argument, found ${typeof(n)}`);
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayI32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    wasm.__externref_drop_slice(ptr, len);
    return result;
}

function getArrayU16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

let cachedInt16ArrayMemory0 = null;
function getInt16ArrayMemory0() {
    if (cachedInt16ArrayMemory0 === null || cachedInt16ArrayMemory0.byteLength === 0) {
        cachedInt16ArrayMemory0 = new Int16Array(wasm.memory.buffer);
    }
    return cachedInt16ArrayMemory0;
}

let cachedInt32ArrayMemory0 = null;
function getInt32ArrayMemory0() {
    if (cachedInt32ArrayMemory0 === null || cachedInt32ArrayMemory0.byteLength === 0) {
        cachedInt32ArrayMemory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32ArrayMemory0;
}

let cachedInt8ArrayMemory0 = null;
function getInt8ArrayMemory0() {
    if (cachedInt8ArrayMemory0 === null || cachedInt8ArrayMemory0.byteLength === 0) {
        cachedInt8ArrayMemory0 = new Int8Array(wasm.memory.buffer);
    }
    return cachedInt8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint16ArrayMemory0 = null;
function getUint16ArrayMemory0() {
    if (cachedUint16ArrayMemory0 === null || cachedUint16ArrayMemory0.byteLength === 0) {
        cachedUint16ArrayMemory0 = new Uint16Array(wasm.memory.buffer);
    }
    return cachedUint16ArrayMemory0;
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function logError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        let error = (function () {
            try {
                return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
            } catch(_) {
                return "<failed to stringify thrown value>";
            }
        }());
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
        throw e;
    }
}

function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    for (let i = 0; i < array.length; i++) {
        const add = addToExternrefTable0(array[i]);
        getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (typeof(arg) !== 'string') throw new Error(`expected a string argument, found ${typeof(arg)}`);
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);
        if (ret.read !== arg.length) throw new Error('failed to pass whole string');
        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    }
}

let WASM_VECTOR_LEN = 0;

function _ZN12wasm_bindgen7convert8closures1_6invoke17h45209938a407bc88E(arg0, arg1) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._ZN12wasm_bindgen7convert8closures1_6invoke17h45209938a407bc88E(arg0, arg1);
}

function _ZN12wasm_bindgen7convert8closures1_6invoke17h98da82563026b44fE(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._ZN12wasm_bindgen7convert8closures1_6invoke17h98da82563026b44fE(arg0, arg1, arg2);
}

function _ZN12wasm_bindgen7convert8closures1_1_6invoke17hdd75769ade6cb1d2E(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._ZN12wasm_bindgen7convert8closures1_1_6invoke17hdd75769ade6cb1d2E(arg0, arg1, arg2);
}

function _ZN12wasm_bindgen7convert8closures1_6invoke17ha1b8499d6180a081E(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._ZN12wasm_bindgen7convert8closures1_6invoke17ha1b8499d6180a081E(arg0, arg1, arg2);
}

function _ZN12wasm_bindgen7convert8closures1_6invoke17h3e84084fcfba997aE(arg0, arg1) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._ZN12wasm_bindgen7convert8closures1_6invoke17h3e84084fcfba997aE(arg0, arg1);
}

function _ZN12wasm_bindgen7convert8closures1_6invoke17hf06763e6d4c1560fE(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._ZN12wasm_bindgen7convert8closures1_6invoke17hf06763e6d4c1560fE(arg0, arg1, arg2);
}

function _ZN12wasm_bindgen7convert8closures1_6invoke17hefa6e0dde9a250d2E(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._ZN12wasm_bindgen7convert8closures1_6invoke17hefa6e0dde9a250d2E(arg0, arg1, arg2);
}

function _ZN12wasm_bindgen7convert8closures1_6invoke17hb2200103b4052285E(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._ZN12wasm_bindgen7convert8closures1_6invoke17hb2200103b4052285E(arg0, arg1, arg2);
}

function _ZN12wasm_bindgen7convert8closures1_6invoke17h2a14ce52201c771dE(arg0, arg1) {
    _assertNum(arg0);
    _assertNum(arg1);
    const ret = wasm._ZN12wasm_bindgen7convert8closures1_6invoke17h2a14ce52201c771dE(arg0, arg1);
    return ret !== 0;
}

const __wbindgen_enum_GpuAddressMode = ["clamp-to-edge", "repeat", "mirror-repeat"];

const __wbindgen_enum_GpuBlendFactor = ["zero", "one", "src", "one-minus-src", "src-alpha", "one-minus-src-alpha", "dst", "one-minus-dst", "dst-alpha", "one-minus-dst-alpha", "src-alpha-saturated", "constant", "one-minus-constant", "src1", "one-minus-src1", "src1-alpha", "one-minus-src1-alpha"];

const __wbindgen_enum_GpuBlendOperation = ["add", "subtract", "reverse-subtract", "min", "max"];

const __wbindgen_enum_GpuBufferBindingType = ["uniform", "storage", "read-only-storage"];

const __wbindgen_enum_GpuCanvasAlphaMode = ["opaque", "premultiplied"];

const __wbindgen_enum_GpuCompareFunction = ["never", "less", "equal", "less-equal", "greater", "not-equal", "greater-equal", "always"];

const __wbindgen_enum_GpuCullMode = ["none", "front", "back"];

const __wbindgen_enum_GpuDeviceLostReason = ["unknown", "destroyed"];

const __wbindgen_enum_GpuErrorFilter = ["validation", "out-of-memory", "internal"];

const __wbindgen_enum_GpuFilterMode = ["nearest", "linear"];

const __wbindgen_enum_GpuFrontFace = ["ccw", "cw"];

const __wbindgen_enum_GpuIndexFormat = ["uint16", "uint32"];

const __wbindgen_enum_GpuLoadOp = ["load", "clear"];

const __wbindgen_enum_GpuMipmapFilterMode = ["nearest", "linear"];

const __wbindgen_enum_GpuPowerPreference = ["low-power", "high-performance"];

const __wbindgen_enum_GpuPrimitiveTopology = ["point-list", "line-list", "line-strip", "triangle-list", "triangle-strip"];

const __wbindgen_enum_GpuQueryType = ["occlusion", "timestamp"];

const __wbindgen_enum_GpuSamplerBindingType = ["filtering", "non-filtering", "comparison"];

const __wbindgen_enum_GpuStencilOperation = ["keep", "zero", "replace", "invert", "increment-clamp", "decrement-clamp", "increment-wrap", "decrement-wrap"];

const __wbindgen_enum_GpuStorageTextureAccess = ["write-only", "read-only", "read-write"];

const __wbindgen_enum_GpuStoreOp = ["store", "discard"];

const __wbindgen_enum_GpuTextureAspect = ["all", "stencil-only", "depth-only"];

const __wbindgen_enum_GpuTextureDimension = ["1d", "2d", "3d"];

const __wbindgen_enum_GpuTextureFormat = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"];

const __wbindgen_enum_GpuTextureSampleType = ["float", "unfilterable-float", "depth", "sint", "uint"];

const __wbindgen_enum_GpuTextureViewDimension = ["1d", "2d", "2d-array", "cube", "cube-array", "3d"];

const __wbindgen_enum_GpuVertexFormat = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"];

const __wbindgen_enum_GpuVertexStepMode = ["vertex", "instance"];

const __wbindgen_enum_ScrollBehavior = ["auto", "instant", "smooth"];

const __wbindgen_enum_ScrollLogicalPosition = ["start", "center", "end", "nearest"];

const __wbindgen_enum_ScrollRestoration = ["auto", "manual"];

const JSOwnerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_jsowner_free(ptr >>> 0, 1));

export class JSOwner {
    constructor() {
        throw new Error('cannot invoke `new` directly');
    }
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(JSOwner.prototype);
        obj.__wbg_ptr = ptr;
        JSOwnerFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        JSOwnerFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_jsowner_free(ptr, 0);
    }
}
if (Symbol.dispose) JSOwner.prototype[Symbol.dispose] = JSOwner.prototype.free;

const EXPECTED_RESPONSE_TYPES = new Set(['basic', 'cors', 'default']);

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && EXPECTED_RESPONSE_TYPES.has(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_Error_52673b7de5a0ca89 = function() { return logError(function (arg0, arg1) {
        const ret = Error(getStringFromWasm0(arg0, arg1));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_String_8f0eb39a4a4c2f66 = function() { return logError(function (arg0, arg1) {
        const ret = String(arg1);
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_Window_9e7ea8667e28eb00 = function() { return logError(function (arg0) {
        const ret = arg0.Window;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_WorkerGlobalScope_0169ffb9adb5f5ef = function() { return logError(function (arg0) {
        const ret = arg0.WorkerGlobalScope;
        return ret;
    }, arguments) };
    imports.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(arg0, arg1) {
        const v = arg1;
        const ret = typeof(v) === 'bigint' ? v : undefined;
        if (!isLikeNone(ret)) {
            _assertBigInt(ret);
        }
        getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    };
    imports.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(arg0) {
        const v = arg0;
        const ret = typeof(v) === 'boolean' ? v : undefined;
        if (!isLikeNone(ret)) {
            _assertBoolean(ret);
        }
        return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
    };
    imports.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(arg0, arg1) {
        const ret = debugString(arg1);
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg___wbindgen_exports_ac196ec7383166bb = function() {
        const ret = wasm;
        return ret;
    };
    imports.wbg.__wbg___wbindgen_function_table_932edf419e6641fe = function() {
        const ret = wasm.__wbindgen_export;
        return ret;
    };
    imports.wbg.__wbg___wbindgen_in_0d3e1e8f0c669317 = function(arg0, arg1) {
        const ret = arg0 in arg1;
        _assertBoolean(ret);
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_bigint_0e1a2e3f55cfae27 = function(arg0) {
        const ret = typeof(arg0) === 'bigint';
        _assertBoolean(ret);
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(arg0) {
        const ret = typeof(arg0) === 'function';
        _assertBoolean(ret);
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_null_dfda7d66506c95b5 = function(arg0) {
        const ret = arg0 === null;
        _assertBoolean(ret);
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(arg0) {
        const val = arg0;
        const ret = typeof(val) === 'object' && val !== null;
        _assertBoolean(ret);
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_string_704ef9c8fc131030 = function(arg0) {
        const ret = typeof(arg0) === 'string';
        _assertBoolean(ret);
        return ret;
    };
    imports.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(arg0) {
        const ret = arg0 === undefined;
        _assertBoolean(ret);
        return ret;
    };
    imports.wbg.__wbg___wbindgen_jsval_eq_b6101cc9cef1fe36 = function(arg0, arg1) {
        const ret = arg0 === arg1;
        _assertBoolean(ret);
        return ret;
    };
    imports.wbg.__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d = function(arg0, arg1) {
        const ret = arg0 == arg1;
        _assertBoolean(ret);
        return ret;
    };
    imports.wbg.__wbg___wbindgen_memory_a342e963fbcabd68 = function() {
        const ret = wasm.memory;
        return ret;
    };
    imports.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(arg0, arg1) {
        const obj = arg1;
        const ret = typeof(obj) === 'number' ? obj : undefined;
        if (!isLikeNone(ret)) {
            _assertNum(ret);
        }
        getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    };
    imports.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(arg0, arg1) {
        const obj = arg1;
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbg__wbg_cb_unref_87dfb5aaa0cbcea7 = function() { return logError(function (arg0) {
        arg0._wbg_cb_unref();
    }, arguments) };
    imports.wbg.__wbg_activeTexture_1db0722f00c3f843 = function() { return logError(function (arg0, arg1) {
        arg0.activeTexture(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_activeTexture_59810c16ea8d6e34 = function() { return logError(function (arg0, arg1) {
        arg0.activeTexture(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_addEventListener_6a82629b3d430a48 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3);
    }, arguments) };
    imports.wbg.__wbg_altKey_56d1d642f3a28c92 = function() { return logError(function (arg0) {
        const ret = arg0.altKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_altKey_5ad2d5a305de8b3e = function() { return logError(function (arg0) {
        const ret = arg0.altKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_altKey_e13fae92dfebca3e = function() { return logError(function (arg0) {
        const ret = arg0.altKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_animationName_4f0d28f45a404cd5 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.animationName;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_appendChild_7465eba84213c75f = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.appendChild(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_arrayBuffer_3356d392ef2d2aa9 = function() { return logError(function (arg0) {
        const ret = arg0.arrayBuffer();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_arrayBuffer_c04af4fce566092d = function() { return handleError(function (arg0) {
        const ret = arg0.arrayBuffer();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_attachShader_bc2b53790fd12d3a = function() { return logError(function (arg0, arg1, arg2) {
        arg0.attachShader(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_attachShader_ce575704294db9cc = function() { return logError(function (arg0, arg1, arg2) {
        arg0.attachShader(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_back_0496114634bc11e8 = function() { return handleError(function (arg0) {
        arg0.back();
    }, arguments) };
    imports.wbg.__wbg_beginComputePass_01f3206a4680f256 = function() { return logError(function (arg0, arg1) {
        const ret = arg0.beginComputePass(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_beginQuery_71fca84d19c65fb1 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.beginQuery(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_beginRenderPass_aefd0d9681a1f010 = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.beginRenderPass(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_bindAttribLocation_2bf0ba75dbebbc07 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_bindAttribLocation_4e8be7470dd8dd5a = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_bindBufferRange_b775673f1d6f510c = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.bindBufferRange(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_bindBuffer_110b128c65a97376 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.bindBuffer(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_bindBuffer_c24c31cbec41cb21 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.bindBuffer(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_bindFramebuffer_302dbc9f62d8321e = function() { return logError(function (arg0, arg1, arg2) {
        arg0.bindFramebuffer(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_bindFramebuffer_33b64eb9f536d2b2 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.bindFramebuffer(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_bindRenderbuffer_032b12b73a396d8c = function() { return logError(function (arg0, arg1, arg2) {
        arg0.bindRenderbuffer(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_bindRenderbuffer_43c98d43540f75ae = function() { return logError(function (arg0, arg1, arg2) {
        arg0.bindRenderbuffer(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_bindSampler_b835d52aec542c4c = function() { return logError(function (arg0, arg1, arg2) {
        arg0.bindSampler(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_bindTexture_4537240b278f1d53 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.bindTexture(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_bindTexture_6ed714c0afe8b8d1 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.bindTexture(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_bindVertexArrayOES_fdb7e747e386f55a = function() { return logError(function (arg0, arg1) {
        arg0.bindVertexArrayOES(arg1);
    }, arguments) };
    imports.wbg.__wbg_bindVertexArray_ced27387a0718508 = function() { return logError(function (arg0, arg1) {
        arg0.bindVertexArray(arg1);
    }, arguments) };
    imports.wbg.__wbg_blendColor_e45c66bf83bef98c = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.blendColor(arg1, arg2, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_blendColor_f4107640d80916d6 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.blendColor(arg1, arg2, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_blendEquationSeparate_403e2a62d6e0d67f = function() { return logError(function (arg0, arg1, arg2) {
        arg0.blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_blendEquationSeparate_e1eb0d0f32ef91af = function() { return logError(function (arg0, arg1, arg2) {
        arg0.blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_blendEquation_493973ecbb09fe8c = function() { return logError(function (arg0, arg1) {
        arg0.blendEquation(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_blendEquation_e3d6a981d832c9ff = function() { return logError(function (arg0, arg1) {
        arg0.blendEquation(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_blendFuncSeparate_4cca29476893cc61 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_blendFuncSeparate_e5a1bacf4a0700cd = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_blendFunc_046483861de36edd = function() { return logError(function (arg0, arg1, arg2) {
        arg0.blendFunc(arg1 >>> 0, arg2 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_blendFunc_5eed6dc03a180da2 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.blendFunc(arg1 >>> 0, arg2 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_blitFramebuffer_02db7e02b81bd174 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
        arg0.blitFramebuffer(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_blockSize_6456aaf09f0ab287 = function() { return logError(function (arg0) {
        const ret = arg0.blockSize;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_blur_ca11f751d4c09d3f = function() { return handleError(function (arg0) {
        arg0.blur();
    }, arguments) };
    imports.wbg.__wbg_borderBoxSize_70d86f22387276a9 = function() { return logError(function (arg0) {
        const ret = arg0.borderBoxSize;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_boundingClientRect_b3bfd2a8c582aa74 = function() { return logError(function (arg0) {
        const ret = arg0.boundingClientRect;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_bubbles_e4c9c79552ecbd09 = function() { return logError(function (arg0) {
        const ret = arg0.bubbles;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_bufferData_69dbeea8e1d79f7b = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_bufferData_ac5c7900b06f1517 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_bufferData_c75947f383ca8992 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_bufferData_cd7c1cdb1eb72df8 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_bufferSubData_16db9d7d9f1c86bb = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
    }, arguments) };
    imports.wbg.__wbg_bufferSubData_e256855a0fda09a5 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
    }, arguments) };
    imports.wbg.__wbg_buffer_063cd102cc769a1c = function() { return logError(function (arg0) {
        const ret = arg0.buffer;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_buffer_6cb2fecb1f253d71 = function() { return logError(function (arg0) {
        const ret = arg0.buffer;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_button_a54acd25bab5d442 = function() { return logError(function (arg0) {
        const ret = arg0.button;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_buttons_a37ff9ffacadddb5 = function() { return logError(function (arg0) {
        const ret = arg0.buttons;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_byteLength_166ad9a51ecaa5f1 = function() { return logError(function (arg0) {
        const ret = arg0.byteLength;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_call_3020136f7a2d6e44 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.call(arg1, arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_call_abb4ff46ce38be40 = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.call(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_changedTouches_002fee0da4489efe = function() { return logError(function (arg0) {
        const ret = arg0.changedTouches;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_charCodeAt_6c748220ece97752 = function() { return logError(function (arg0, arg1) {
        const ret = arg0.charCodeAt(arg1 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_checkValidity_61cde4e80b082115 = function() { return logError(function (arg0) {
        const ret = arg0.checkValidity();
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_checked_3e525f462e60e1bb = function() { return logError(function (arg0) {
        const ret = arg0.checked;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clearBuffer_31e63ae370e920a3 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.clearBuffer(arg1, arg2, arg3);
    }, arguments) };
    imports.wbg.__wbg_clearBuffer_f0f82b792cfe1f18 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.clearBuffer(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_clearBufferfv_d33b9af84c129287 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.clearBufferfv(arg1 >>> 0, arg2, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_clearBufferiv_ba2da32ddbdf9e20 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.clearBufferiv(arg1 >>> 0, arg2, getArrayI32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_clearBufferuiv_e465a763e54627c1 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.clearBufferuiv(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_clearData_02577d7d86325f86 = function() { return handleError(function (arg0, arg1, arg2) {
        arg0.clearData(getStringFromWasm0(arg1, arg2));
    }, arguments) };
    imports.wbg.__wbg_clearData_b87363593ea8a1a4 = function() { return handleError(function (arg0) {
        arg0.clearData();
    }, arguments) };
    imports.wbg.__wbg_clearDepth_0f3bb08f167cf1f0 = function() { return logError(function (arg0, arg1) {
        arg0.clearDepth(arg1);
    }, arguments) };
    imports.wbg.__wbg_clearDepth_49b8cc204e46a1ff = function() { return logError(function (arg0, arg1) {
        arg0.clearDepth(arg1);
    }, arguments) };
    imports.wbg.__wbg_clearStencil_159eaeffc88e2487 = function() { return logError(function (arg0, arg1) {
        arg0.clearStencil(arg1);
    }, arguments) };
    imports.wbg.__wbg_clearStencil_f1d7134551355df7 = function() { return logError(function (arg0, arg1) {
        arg0.clearStencil(arg1);
    }, arguments) };
    imports.wbg.__wbg_clearTimeout_5a54f8841c30079a = function() { return logError(function (arg0) {
        const ret = clearTimeout(arg0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clear_00ac71df5db8ab17 = function() { return logError(function (arg0, arg1) {
        arg0.clear(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_clear_52caf9271911674b = function() { return logError(function (arg0, arg1) {
        arg0.clear(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_clientHeight_2554d64d9b2dfc4f = function() { return logError(function (arg0) {
        const ret = arg0.clientHeight;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clientWaitSync_42970d3aaa2e5351 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        const ret = arg0.clientWaitSync(arg1, arg2 >>> 0, arg3 >>> 0);
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clientWidth_dbc9540f4ebdce2a = function() { return logError(function (arg0) {
        const ret = arg0.clientWidth;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clientX_2ea1e898842f21ed = function() { return logError(function (arg0) {
        const ret = arg0.clientX;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clientX_c17906c33ea43025 = function() { return logError(function (arg0) {
        const ret = arg0.clientX;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clientY_70eb66d231a332a3 = function() { return logError(function (arg0) {
        const ret = arg0.clientY;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_clientY_d12086a5a6a3a9d5 = function() { return logError(function (arg0) {
        const ret = arg0.clientY;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_code_85a811fe6ca962be = function() { return logError(function (arg0) {
        const ret = arg0.code;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_code_b3ddfa90f724c486 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.code;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_colorMask_27d9f83dd2189ed6 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
    }, arguments) };
    imports.wbg.__wbg_colorMask_f000b510fac0bd7c = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
    }, arguments) };
    imports.wbg.__wbg_compileShader_ac0bf6f0837881c3 = function() { return logError(function (arg0, arg1) {
        arg0.compileShader(arg1);
    }, arguments) };
    imports.wbg.__wbg_compileShader_ba337110bed419e1 = function() { return logError(function (arg0, arg1) {
        arg0.compileShader(arg1);
    }, arguments) };
    imports.wbg.__wbg_compressedTexSubImage2D_4ab2b43cacd95564 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8, arg9);
    }, arguments) };
    imports.wbg.__wbg_compressedTexSubImage2D_bc669b55bfad0d12 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8);
    }, arguments) };
    imports.wbg.__wbg_compressedTexSubImage2D_c9d1d1f196bce860 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8);
    }, arguments) };
    imports.wbg.__wbg_compressedTexSubImage3D_376b9e3cdbccd59b = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
        arg0.compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10);
    }, arguments) };
    imports.wbg.__wbg_compressedTexSubImage3D_bbc0d31582e3a014 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
        arg0.compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10, arg11);
    }, arguments) };
    imports.wbg.__wbg_configure_86dd92dde48d105a = function() { return handleError(function (arg0, arg1) {
        arg0.configure(arg1);
    }, arguments) };
    imports.wbg.__wbg_contentBoxSize_252a34474a67b3bb = function() { return logError(function (arg0) {
        const ret = arg0.contentBoxSize;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_copyBufferSubData_74ad55c13c5b2ae2 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.copyBufferSubData(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_copyBufferToBuffer_0d141e7111b0b6ab = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.copyBufferToBuffer(arg1, arg2, arg3, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_copyBufferToTexture_722a7aa47b5d891b = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        arg0.copyBufferToTexture(arg1, arg2, arg3);
    }, arguments) };
    imports.wbg.__wbg_copyExternalImageToTexture_a2037621913ee52d = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        arg0.copyExternalImageToTexture(arg1, arg2, arg3);
    }, arguments) };
    imports.wbg.__wbg_copyTexSubImage2D_593b8653753bc7d3 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        arg0.copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
    }, arguments) };
    imports.wbg.__wbg_copyTexSubImage2D_7f4e6e26c0eff156 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
        arg0.copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
    }, arguments) };
    imports.wbg.__wbg_copyTexSubImage3D_c66982c639aa21c4 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.copyTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
    }, arguments) };
    imports.wbg.__wbg_copyTextureToBuffer_bb350c95b19e5999 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        arg0.copyTextureToBuffer(arg1, arg2, arg3);
    }, arguments) };
    imports.wbg.__wbg_copyTextureToTexture_e56f4277214ec1b4 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        arg0.copyTextureToTexture(arg1, arg2, arg3);
    }, arguments) };
    imports.wbg.__wbg_createBindGroupLayout_f0635625a1a82bea = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.createBindGroupLayout(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createBindGroup_043b06d20124f91e = function() { return logError(function (arg0, arg1) {
        const ret = arg0.createBindGroup(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createBuffer_086a8bb05ced884a = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.createBuffer(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createBuffer_465b645a46535184 = function() { return logError(function (arg0) {
        const ret = arg0.createBuffer();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createBuffer_8601b8ec330ab49d = function() { return logError(function (arg0) {
        const ret = arg0.createBuffer();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createCommandEncoder_aa9ae9d445bb7abf = function() { return logError(function (arg0, arg1) {
        const ret = arg0.createCommandEncoder(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createComment_89db599aa930ef8a = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.createComment(getStringFromWasm0(arg1, arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createComputePipeline_059cf7af9b47a3fc = function() { return logError(function (arg0, arg1) {
        const ret = arg0.createComputePipeline(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createElementNS_e7c12bbd579529e2 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        const ret = arg0.createElementNS(arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createElement_da4ed2b219560fc6 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createFramebuffer_5d000a6cde602c77 = function() { return logError(function (arg0) {
        const ret = arg0.createFramebuffer();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createFramebuffer_934b44643ffd067a = function() { return logError(function (arg0) {
        const ret = arg0.createFramebuffer();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createPipelineLayout_5cc7e994e46201c7 = function() { return logError(function (arg0, arg1) {
        const ret = arg0.createPipelineLayout(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createProgram_023ba0fc6ff6efd6 = function() { return logError(function (arg0) {
        const ret = arg0.createProgram();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createProgram_ffe9d4a2cba210f4 = function() { return logError(function (arg0) {
        const ret = arg0.createProgram();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createQuerySet_0eb86b1d17c9df17 = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.createQuerySet(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createQuery_427027f57b8d51cc = function() { return logError(function (arg0) {
        const ret = arg0.createQuery();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createRenderBundleEncoder_95f5b5446f199cbd = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.createRenderBundleEncoder(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createRenderPipeline_47152f2f57b11194 = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.createRenderPipeline(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createRenderbuffer_6b6220d1a07652a9 = function() { return logError(function (arg0) {
        const ret = arg0.createRenderbuffer();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createRenderbuffer_f869ce6d85370a7a = function() { return logError(function (arg0) {
        const ret = arg0.createRenderbuffer();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createSampler_4c0a0f10a4d901b3 = function() { return logError(function (arg0) {
        const ret = arg0.createSampler();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createSampler_f3970b77a6f36963 = function() { return logError(function (arg0, arg1) {
        const ret = arg0.createSampler(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createShaderModule_9ec201507fe4949e = function() { return logError(function (arg0, arg1) {
        const ret = arg0.createShaderModule(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createShader_4626088b63c33727 = function() { return logError(function (arg0, arg1) {
        const ret = arg0.createShader(arg1 >>> 0);
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createShader_f88f9b82748ef6c0 = function() { return logError(function (arg0, arg1) {
        const ret = arg0.createShader(arg1 >>> 0);
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createTask_432d6d38dc688bee = function() { return handleError(function (arg0, arg1) {
        const ret = console.createTask(getStringFromWasm0(arg0, arg1));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createTextNode_0cf8168f7646a5d2 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.createTextNode(getStringFromWasm0(arg1, arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createTexture_09f18232c5ad6e69 = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.createTexture(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_createTexture_41211a4e8ae0afec = function() { return logError(function (arg0) {
        const ret = arg0.createTexture();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createTexture_4d5934eb9772b5fe = function() { return logError(function (arg0) {
        const ret = arg0.createTexture();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createVertexArrayOES_7bcc20082143e8f2 = function() { return logError(function (arg0) {
        const ret = arg0.createVertexArrayOES();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createVertexArray_997b3c5b1091afd9 = function() { return logError(function (arg0) {
        const ret = arg0.createVertexArray();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_createView_f7cd0a0356a46f3b = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.createView(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_ctrlKey_487597b9069da036 = function() { return logError(function (arg0) {
        const ret = arg0.ctrlKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_ctrlKey_878cf4b58012cbf1 = function() { return logError(function (arg0) {
        const ret = arg0.ctrlKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_ctrlKey_b391e5105c3f6e76 = function() { return logError(function (arg0) {
        const ret = arg0.ctrlKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_cullFace_767c25333fcc7c8b = function() { return logError(function (arg0, arg1) {
        arg0.cullFace(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_cullFace_88f07a3436967138 = function() { return logError(function (arg0, arg1) {
        arg0.cullFace(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_dataTransfer_3653d4b679b026b2 = function() { return logError(function (arg0) {
        const ret = arg0.dataTransfer;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_data_8bf4ae669a78a688 = function() { return logError(function (arg0) {
        const ret = arg0.data;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_data_ba1e638a3b5a1da7 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.data;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_deleteBuffer_5ed1698208181e1f = function() { return logError(function (arg0, arg1) {
        arg0.deleteBuffer(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteBuffer_ba7f1164cc23b2ca = function() { return logError(function (arg0, arg1) {
        arg0.deleteBuffer(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteFramebuffer_71a99ec4adbfc3f2 = function() { return logError(function (arg0, arg1) {
        arg0.deleteFramebuffer(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteFramebuffer_d25c0dc61ce8eda7 = function() { return logError(function (arg0, arg1) {
        arg0.deleteFramebuffer(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteProgram_3bf297a31d0e6e48 = function() { return logError(function (arg0, arg1) {
        arg0.deleteProgram(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteProgram_62774baacb13ff2b = function() { return logError(function (arg0, arg1) {
        arg0.deleteProgram(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteQuery_9ae103bb04e9a99d = function() { return logError(function (arg0, arg1) {
        arg0.deleteQuery(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteRenderbuffer_3e536cf09d672302 = function() { return logError(function (arg0, arg1) {
        arg0.deleteRenderbuffer(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteRenderbuffer_ada437284f7fb4f2 = function() { return logError(function (arg0, arg1) {
        arg0.deleteRenderbuffer(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteSampler_993727fa1d567ed5 = function() { return logError(function (arg0, arg1) {
        arg0.deleteSampler(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteShader_c357bb8fbede8370 = function() { return logError(function (arg0, arg1) {
        arg0.deleteShader(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteShader_c686dd351de5a068 = function() { return logError(function (arg0, arg1) {
        arg0.deleteShader(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteSync_f5db5552febb6818 = function() { return logError(function (arg0, arg1) {
        arg0.deleteSync(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteTexture_2a9b703dc2df5657 = function() { return logError(function (arg0, arg1) {
        arg0.deleteTexture(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteTexture_875f8d84e74610a0 = function() { return logError(function (arg0, arg1) {
        arg0.deleteTexture(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteVertexArrayOES_c17582be9fb07775 = function() { return logError(function (arg0, arg1) {
        arg0.deleteVertexArrayOES(arg1);
    }, arguments) };
    imports.wbg.__wbg_deleteVertexArray_af80f68f0bea25b7 = function() { return logError(function (arg0, arg1) {
        arg0.deleteVertexArray(arg1);
    }, arguments) };
    imports.wbg.__wbg_deltaMode_d74ec093e23ffeec = function() { return logError(function (arg0) {
        const ret = arg0.deltaMode;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_deltaX_41f7678c94b10355 = function() { return logError(function (arg0) {
        const ret = arg0.deltaX;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_deltaY_3f10fd796fae2a0f = function() { return logError(function (arg0) {
        const ret = arg0.deltaY;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_deltaZ_72be8a01aff78a55 = function() { return logError(function (arg0) {
        const ret = arg0.deltaZ;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_depthFunc_30cd9028f7f0cb4e = function() { return logError(function (arg0, arg1) {
        arg0.depthFunc(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_depthFunc_eb0c2c825938bb33 = function() { return logError(function (arg0, arg1) {
        arg0.depthFunc(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_depthMask_317f5412242ac5d5 = function() { return logError(function (arg0, arg1) {
        arg0.depthMask(arg1 !== 0);
    }, arguments) };
    imports.wbg.__wbg_depthMask_eabc1830c04e8fca = function() { return logError(function (arg0, arg1) {
        arg0.depthMask(arg1 !== 0);
    }, arguments) };
    imports.wbg.__wbg_depthRange_599ac7ebc9b76a2c = function() { return logError(function (arg0, arg1, arg2) {
        arg0.depthRange(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_depthRange_7025983a507dd522 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.depthRange(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_destroy_0252d01ac8a09285 = function() { return logError(function (arg0) {
        arg0.destroy();
    }, arguments) };
    imports.wbg.__wbg_destroy_9ec012febca0b2bc = function() { return logError(function (arg0) {
        arg0.destroy();
    }, arguments) };
    imports.wbg.__wbg_destroy_c8cba128dc1a0e2d = function() { return logError(function (arg0) {
        arg0.destroy();
    }, arguments) };
    imports.wbg.__wbg_detail_c41efcb8af7bda55 = function() { return logError(function (arg0) {
        const ret = arg0.detail;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_disableVertexAttribArray_4c5c7214724209d0 = function() { return logError(function (arg0, arg1) {
        arg0.disableVertexAttribArray(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_disableVertexAttribArray_bcf2272b428ec9fc = function() { return logError(function (arg0, arg1) {
        arg0.disableVertexAttribArray(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_disable_3af3e194392b0a83 = function() { return logError(function (arg0, arg1) {
        arg0.disable(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_disable_c05809e00765548d = function() { return logError(function (arg0, arg1) {
        arg0.disable(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_documentElement_39f40310398a4cba = function() { return logError(function (arg0) {
        const ret = arg0.documentElement;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_document_5b745e82ba551ca5 = function() { return logError(function (arg0) {
        const ret = arg0.document;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_done_62ea16af4ce34b24 = function() { return logError(function (arg0) {
        const ret = arg0.done;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_drawArraysInstancedANGLE_5802f710395d6947 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.drawArraysInstancedANGLE(arg1 >>> 0, arg2, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_drawArraysInstanced_5a3cccf98d769264 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.drawArraysInstanced(arg1 >>> 0, arg2, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_drawArrays_a8ad03dae79ec56f = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.drawArrays(arg1 >>> 0, arg2, arg3);
    }, arguments) };
    imports.wbg.__wbg_drawArrays_c106ebe0234971d4 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.drawArrays(arg1 >>> 0, arg2, arg3);
    }, arguments) };
    imports.wbg.__wbg_drawBuffersWEBGL_f21a161dc8fb366c = function() { return logError(function (arg0, arg1) {
        arg0.drawBuffersWEBGL(arg1);
    }, arguments) };
    imports.wbg.__wbg_drawBuffers_dd9a3530aa5b71b2 = function() { return logError(function (arg0, arg1) {
        arg0.drawBuffers(arg1);
    }, arguments) };
    imports.wbg.__wbg_drawElementsInstancedANGLE_a63eca97c72be45f = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.drawElementsInstancedANGLE(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_drawElementsInstanced_ad84faddf2b48335 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.drawElementsInstanced(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_drawIndexedIndirect_90027e802dbb47e6 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.drawIndexedIndirect(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_drawIndexed_322c2f9f038d7b23 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.drawIndexed(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_drawIndirect_0794414da8ea662e = function() { return logError(function (arg0, arg1, arg2) {
        arg0.drawIndirect(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_draw_d38c9207eb049f56 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.draw(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_dropEffect_34c4ef48c376c7f5 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.dropEffect;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_effectAllowed_dc1657336b4fae5a = function() { return logError(function (arg0, arg1) {
        const ret = arg1.effectAllowed;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_elapsedTime_71d16751af118fe3 = function() { return logError(function (arg0) {
        const ret = arg0.elapsedTime;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_elapsedTime_f77e10ffa7aabbf8 = function() { return logError(function (arg0) {
        const ret = arg0.elapsedTime;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_enableVertexAttribArray_2898de871f949393 = function() { return logError(function (arg0, arg1) {
        arg0.enableVertexAttribArray(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_enableVertexAttribArray_def9952d8426be95 = function() { return logError(function (arg0, arg1) {
        arg0.enableVertexAttribArray(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_enable_2d8bb952637ad17a = function() { return logError(function (arg0, arg1) {
        arg0.enable(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_enable_52598759008d46ee = function() { return logError(function (arg0, arg1) {
        arg0.enable(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_endQuery_81a855457c9a8807 = function() { return logError(function (arg0, arg1) {
        arg0.endQuery(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_end_d54348baf0bf3b70 = function() { return logError(function (arg0) {
        arg0.end();
    }, arguments) };
    imports.wbg.__wbg_entries_608bc70200b16c2f = function() { return logError(function (arg0) {
        const ret = arg0.entries();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_entries_83c79938054e065f = function() { return logError(function (arg0) {
        const ret = Object.entries(arg0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_error_53172b72ea901998 = function() { return logError(function (arg0) {
        const ret = arg0.error;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_error_7bc7d576a6aaf855 = function() { return logError(function (arg0) {
        console.error(arg0);
    }, arguments) };
    imports.wbg.__wbg_error_d0d5f97361944959 = function() { return logError(function (arg0, arg1) {
        let deferred0_0;
        let deferred0_1;
        try {
            deferred0_0 = arg0;
            deferred0_1 = arg1;
            console.error(getStringFromWasm0(arg0, arg1));
        } finally {
            wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
        }
    }, arguments) };
    imports.wbg.__wbg_eval_aa18aa048f37d16d = function() { return handleError(function (arg0, arg1) {
        const ret = eval(getStringFromWasm0(arg0, arg1));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_executeBundles_22ae3b0de1d09e91 = function() { return logError(function (arg0, arg1) {
        arg0.executeBundles(arg1);
    }, arguments) };
    imports.wbg.__wbg_features_689574262f9403d5 = function() { return logError(function (arg0) {
        const ret = arg0.features;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_features_a4866072bcfdb3fb = function() { return logError(function (arg0) {
        const ret = arg0.features;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_fenceSync_ae9efe266c01d1d4 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.fenceSync(arg1 >>> 0, arg2 >>> 0);
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_fetch_417ef4c9a8dfcd8f = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.fetch(getStringFromWasm0(arg1, arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_files_aa1f009258eadae6 = function() { return logError(function (arg0) {
        const ret = arg0.files;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_files_d5264787ebe0eb8e = function() { return logError(function (arg0) {
        const ret = arg0.files;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_finish_db34a19c90c07af7 = function() { return logError(function (arg0) {
        const ret = arg0.finish();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_finish_e2d3808af76b422a = function() { return logError(function (arg0, arg1) {
        const ret = arg0.finish(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_flush_25841159972acebf = function() { return logError(function (arg0) {
        arg0.flush();
    }, arguments) };
    imports.wbg.__wbg_flush_f0bf967fc4c8252e = function() { return logError(function (arg0) {
        arg0.flush();
    }, arguments) };
    imports.wbg.__wbg_focus_220a53e22147dc0f = function() { return handleError(function (arg0) {
        arg0.focus();
    }, arguments) };
    imports.wbg.__wbg_force_ec61071358a7ae6f = function() { return logError(function (arg0) {
        const ret = arg0.force;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_forward_2c225c2dffd128c8 = function() { return handleError(function (arg0) {
        arg0.forward();
    }, arguments) };
    imports.wbg.__wbg_framebufferRenderbuffer_c4e0a3741080e47d = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
    }, arguments) };
    imports.wbg.__wbg_framebufferRenderbuffer_d11b93c15d813b67 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
    }, arguments) };
    imports.wbg.__wbg_framebufferTexture2D_1c59ad9667ea1ea1 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_framebufferTexture2D_489e539476d29f49 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_framebufferTextureLayer_adaeec76c62e2293 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.framebufferTextureLayer(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_framebufferTextureMultiviewOVR_81e594036296c9b0 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        arg0.framebufferTextureMultiviewOVR(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5, arg6);
    }, arguments) };
    imports.wbg.__wbg_frontFace_9a8e14be7e21500f = function() { return logError(function (arg0, arg1) {
        arg0.frontFace(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_frontFace_b516366b32ef6f00 = function() { return logError(function (arg0, arg1) {
        arg0.frontFace(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_getAsFile_c46fe9930bb935e4 = function() { return handleError(function (arg0) {
        const ret = arg0.getAsFile();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_getAttribute_80900eec94cb3636 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        const ret = arg1.getAttribute(getStringFromWasm0(arg2, arg3));
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_getBoundingClientRect_25e44a78507968b0 = function() { return logError(function (arg0) {
        const ret = arg0.getBoundingClientRect();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getBufferSubData_1867a1050f5a6726 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.getBufferSubData(arg1 >>> 0, arg2, arg3);
    }, arguments) };
    imports.wbg.__wbg_getContext_01f42b234e833f0a = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_getContext_1a6877af6b5f04dc = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = arg0.getContext(getStringFromWasm0(arg1, arg2), arg3);
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_getContext_2f210d0a58d43d95 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_getContext_40a6fc6da6cacc21 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = arg0.getContext(getStringFromWasm0(arg1, arg2), arg3);
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_getCurrentTexture_6ee19b05d6ba43ba = function() { return handleError(function (arg0) {
        const ret = arg0.getCurrentTexture();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getData_0c18014d58e42433 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = arg1.getData(getStringFromWasm0(arg2, arg3));
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_getElementById_e05488d2143c2b21 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_getExtension_49a13df0dc150fab = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.getExtension(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_getIndexedParameter_46abff0edb598e22 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.getIndexedParameter(arg1 >>> 0, arg2 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getMappedRange_b986a889b6b53379 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.getMappedRange(arg1, arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getMetaContents_40b26119ad5333f0 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = getMetaContents(getStringFromWasm0(arg1, arg2));
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_getNode_c70a31f61cabe0a8 = function() { return logError(function (arg0, arg1) {
        const ret = arg0.getNode(arg1 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getParameter_08df3cb47d357cca = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.getParameter(arg1 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getParameter_1dfd667c33169fab = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.getParameter(arg1 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getPreferredCanvasFormat_c56b5a9a243fe942 = function() { return logError(function (arg0) {
        const ret = arg0.getPreferredCanvasFormat();
        return (__wbindgen_enum_GpuTextureFormat.indexOf(ret) + 1 || 96) - 1;
    }, arguments) };
    imports.wbg.__wbg_getProgramInfoLog_a0ff8b0971fcaf48 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg1.getProgramInfoLog(arg2);
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_getProgramInfoLog_ea3064b153e4542a = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg1.getProgramInfoLog(arg2);
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_getProgramParameter_c777611a448a6ccd = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getProgramParameter_ff1aee3815d6a8f9 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getQueryParameter_7f1971af9b820343 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.getQueryParameter(arg1, arg2 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getShaderInfoLog_1affea8c74bd191c = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg1.getShaderInfoLog(arg2);
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_getShaderInfoLog_862d8c35c68d02c8 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg1.getShaderInfoLog(arg2);
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_getShaderParameter_1f86483b99db3dcc = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getShaderParameter_b8a41abb0d7d23c3 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getSupportedExtensions_bc23bc19c9dac45d = function() { return logError(function (arg0) {
        const ret = arg0.getSupportedExtensions();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_getSupportedProfiles_d5636f8d10765e75 = function() { return logError(function (arg0) {
        const ret = arg0.getSupportedProfiles();
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_getSyncParameter_20391c81e5e58c48 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.getSyncParameter(arg1, arg2 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getUniformBlockIndex_1453ff945a9eefd5 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        const ret = arg0.getUniformBlockIndex(arg1, getStringFromWasm0(arg2, arg3));
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_getUniformLocation_21ac12bfc569cbbf = function() { return logError(function (arg0, arg1, arg2, arg3) {
        const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_getUniformLocation_2a4ddf8dd8285373 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_get_6b7bd52aca3f9671 = function() { return logError(function (arg0, arg1) {
        const ret = arg0[arg1 >>> 0];
        return ret;
    }, arguments) };
    imports.wbg.__wbg_get_84957f57555c0874 = function() { return logError(function (arg0, arg1) {
        const ret = arg0[arg1 >>> 0];
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_get_af9dab7e9603ea93 = function() { return handleError(function (arg0, arg1) {
        const ret = Reflect.get(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_get_c53d381635aa3929 = function() { return logError(function (arg0, arg1) {
        const ret = arg0[arg1 >>> 0];
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_get_e8e8a591c89f67f6 = function() { return logError(function (arg0, arg1) {
        const ret = arg0[arg1 >>> 0];
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_get_select_data_6e0428e22d7a42ca = function() { return logError(function (arg0, arg1) {
        const ret = get_select_data(arg1);
        const ptr1 = passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_gpu_1b22165b67dd5a59 = function() { return logError(function (arg0) {
        const ret = arg0.gpu;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_grow_63c5122da71bcc6a = function() { return logError(function (arg0, arg1) {
        const ret = arg0.grow(arg1 >>> 0);
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_grow_fb776206c3a4e6f3 = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.grow(arg1 >>> 0);
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_has_c563a404388202f5 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.has(getStringFromWasm0(arg1, arg2));
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_hash_979a7861415bf1f8 = function() { return handleError(function (arg0, arg1) {
        const ret = arg1.hash;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_head_aa354d3e01363673 = function() { return logError(function (arg0) {
        const ret = arg0.head;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_height_3a0b31e52a5b7f17 = function() { return logError(function (arg0) {
        const ret = arg0.height;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_height_5d22b94a936fae9f = function() { return logError(function (arg0) {
        const ret = arg0.height;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_height_77d7b044cc9a387e = function() { return logError(function (arg0) {
        const ret = arg0.height;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_height_8d6090c923385da5 = function() { return logError(function (arg0) {
        const ret = arg0.height;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_height_93d6779af8295699 = function() { return logError(function (arg0) {
        const ret = arg0.height;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_height_a07787f693c253d2 = function() { return logError(function (arg0) {
        const ret = arg0.height;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_height_b39b909fd2ab3669 = function() { return logError(function (arg0) {
        const ret = arg0.height;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_height_b5f604f110c1540c = function() { return logError(function (arg0) {
        const ret = arg0.height;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_history_42a0e31617a8f00e = function() { return handleError(function (arg0) {
        const ret = arg0.history;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_host_d33d7c53a6d98060 = function() { return handleError(function (arg0, arg1) {
        const ret = arg1.host;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_identifier_4045753259aef15d = function() { return logError(function (arg0) {
        const ret = arg0.identifier;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_includes_cd7103de1f6ce823 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.includes(arg1, arg2);
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_initialize_985a2a247c58b5f0 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.initialize(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_inlineSize_65c8cd0ecc54c605 = function() { return logError(function (arg0) {
        const ret = arg0.inlineSize;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_ArrayBuffer_f3320d2419cd0355 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof ArrayBuffer;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_Blob_e9c51ce33a4b6181 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof Blob;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_Document_90b941f0297459fe = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof Document;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_DragEvent_23b95c6efffcf525 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof DragEvent;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_Element_6f7ba982258cfc0f = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof Element;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_File_8de82c08b7cd5db7 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof File;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_GpuAdapter_331cc7dcda68de8c = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof GPUAdapter;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_GpuCanvasContext_4ea475a10f693c29 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof GPUCanvasContext;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_GpuDeviceLostInfo_ad89975227239f55 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof GPUDeviceLostInfo;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_GpuOutOfMemoryError_37ed19bdb2cf4ac4 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof GPUOutOfMemoryError;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_GpuValidationError_6dca0186e4a231ce = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof GPUValidationError;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_HtmlCanvasElement_c4251b1b6a15edcc = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof HTMLCanvasElement;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_HtmlElement_20a3acb594113d73 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof HTMLElement;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_HtmlFormElement_c19e72a917a5f1f0 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof HTMLFormElement;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_HtmlInputElement_46b31917ce88698f = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof HTMLInputElement;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_HtmlSelectElement_7b43062ce94166ee = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof HTMLSelectElement;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_HtmlTextAreaElement_c536f795b9189187 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof HTMLTextAreaElement;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_Map_084be8da74364158 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof Map;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_Node_8af87d5d16d153d3 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof Node;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_Object_577e21051f7bcb79 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof Object;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_Uint8Array_da54ccc9d3e09434 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof Uint8Array;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_WebGl2RenderingContext_121e4c8c95b128ef = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof WebGL2RenderingContext;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instanceof_Window_b5cf7783caa68180 = function() { return logError(function (arg0) {
        let result;
        try {
            result = arg0 instanceof Window;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_instantiate_2f0c60e7b54a5652 = function() { return logError(function (arg0, arg1) {
        const ret = WebAssembly.instantiate(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_intersectionRatio_fb01f85a1253c62b = function() { return logError(function (arg0) {
        const ret = arg0.intersectionRatio;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_intersectionRect_d1503bdfe7e62b16 = function() { return logError(function (arg0) {
        const ret = arg0.intersectionRect;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_invalidateFramebuffer_e2d4d1747d73b885 = function() { return handleError(function (arg0, arg1, arg2) {
        arg0.invalidateFramebuffer(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_isArray_51fd9e6422c0a395 = function() { return logError(function (arg0) {
        const ret = Array.isArray(arg0);
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_isComposing_fcde9aa6cddb1f42 = function() { return logError(function (arg0) {
        const ret = arg0.isComposing;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_isIntersecting_2d00a342ea420fb9 = function() { return logError(function (arg0) {
        const ret = arg0.isIntersecting;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_isPrimary_de9c4785fb430351 = function() { return logError(function (arg0) {
        const ret = arg0.isPrimary;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_isSafeInteger_ae7d3f054d55fa16 = function() { return logError(function (arg0) {
        const ret = Number.isSafeInteger(arg0);
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_is_928aa29d71e75457 = function() { return logError(function (arg0, arg1) {
        const ret = Object.is(arg0, arg1);
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_item_1e5438e413f910c3 = function() { return logError(function (arg0, arg1) {
        const ret = arg0.item(arg1 >>> 0);
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_items_7724bf0013e68df2 = function() { return logError(function (arg0) {
        const ret = arg0.items;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_iterator_27b7c8b35ab3e86b = function() { return logError(function () {
        const ret = Symbol.iterator;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_key_505d33c50799526a = function() { return logError(function (arg0, arg1) {
        const ret = arg1.key;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_keys_f5c6002ff150fc6c = function() { return logError(function (arg0) {
        const ret = Object.keys(arg0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_keys_f7c3c12857423fd2 = function() { return logError(function (arg0) {
        const ret = arg0.keys();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_kind_31a97d04435772dc = function() { return logError(function (arg0, arg1) {
        const ret = arg1.kind;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_label_7045a786095b1bab = function() { return logError(function (arg0, arg1) {
        const ret = arg1.label;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_lastModified_0b523634ff1e63fc = function() { return logError(function (arg0) {
        const ret = arg0.lastModified;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_left_d52bfa3824286825 = function() { return logError(function (arg0) {
        const ret = arg0.left;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_length_1f83b8e5895c84aa = function() { return logError(function (arg0) {
        const ret = arg0.length;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_length_22ac23eaec9d8053 = function() { return logError(function (arg0) {
        const ret = arg0.length;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_length_5548a3a9b927d0af = function() { return logError(function (arg0) {
        const ret = arg0.length;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_length_7226f74c66ca4a9d = function() { return logError(function (arg0) {
        const ret = arg0.length;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_length_b2fe2857226439bf = function() { return logError(function (arg0) {
        const ret = arg0.length;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_length_b3a710c4ed3e081c = function() { return logError(function (arg0) {
        const ret = arg0.length;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_length_d45040a40c570362 = function() { return logError(function (arg0) {
        const ret = arg0.length;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_limits_563f98195b4aab75 = function() { return logError(function (arg0) {
        const ret = arg0.limits;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_limits_6e5836ab03ee64b4 = function() { return logError(function (arg0) {
        const ret = arg0.limits;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_linkProgram_2f770464e69099dc = function() { return logError(function (arg0, arg1) {
        arg0.linkProgram(arg1);
    }, arguments) };
    imports.wbg.__wbg_linkProgram_93f76a2f5030041e = function() { return logError(function (arg0, arg1) {
        arg0.linkProgram(arg1);
    }, arguments) };
    imports.wbg.__wbg_location_0ef648bbeb3e599c = function() { return logError(function (arg0) {
        const ret = arg0.location;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_location_962e75c1c1b3ebed = function() { return logError(function (arg0) {
        const ret = arg0.location;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_log_0cc1b7768397bcfe = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        let deferred0_0;
        let deferred0_1;
        try {
            deferred0_0 = arg0;
            deferred0_1 = arg1;
            console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
        } finally {
            wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
        }
    }, arguments) };
    imports.wbg.__wbg_log_1d990106d99dacb7 = function() { return logError(function (arg0) {
        console.log(arg0);
    }, arguments) };
    imports.wbg.__wbg_log_cb9e190acc5753fb = function() { return logError(function (arg0, arg1) {
        let deferred0_0;
        let deferred0_1;
        try {
            deferred0_0 = arg0;
            deferred0_1 = arg1;
            console.log(getStringFromWasm0(arg0, arg1));
        } finally {
            wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
        }
    }, arguments) };
    imports.wbg.__wbg_lost_f5ec8721e4b1cbd0 = function() { return logError(function (arg0) {
        const ret = arg0.lost;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_mapAsync_61fd3c4dd9f60c6d = function() { return logError(function (arg0, arg1, arg2, arg3) {
        const ret = arg0.mapAsync(arg1 >>> 0, arg2, arg3);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_mark_7438147ce31e9d4b = function() { return logError(function (arg0, arg1) {
        performance.mark(getStringFromWasm0(arg0, arg1));
    }, arguments) };
    imports.wbg.__wbg_maxBindGroups_30d01da76ad53580 = function() { return logError(function (arg0) {
        const ret = arg0.maxBindGroups;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxBindingsPerBindGroup_3dcdeb4a7de67a4a = function() { return logError(function (arg0) {
        const ret = arg0.maxBindingsPerBindGroup;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxBufferSize_a3c3e79851bb49a7 = function() { return logError(function (arg0) {
        const ret = arg0.maxBufferSize;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxColorAttachmentBytesPerSample_61daf47ae1b88dc2 = function() { return logError(function (arg0) {
        const ret = arg0.maxColorAttachmentBytesPerSample;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxColorAttachments_f8f65390ed7c3dcd = function() { return logError(function (arg0) {
        const ret = arg0.maxColorAttachments;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxComputeInvocationsPerWorkgroup_dbfa932a2c3d9ca0 = function() { return logError(function (arg0) {
        const ret = arg0.maxComputeInvocationsPerWorkgroup;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxComputeWorkgroupSizeX_2a7fdde2d850eb69 = function() { return logError(function (arg0) {
        const ret = arg0.maxComputeWorkgroupSizeX;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxComputeWorkgroupSizeY_ae6eb3af592e045d = function() { return logError(function (arg0) {
        const ret = arg0.maxComputeWorkgroupSizeY;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxComputeWorkgroupSizeZ_df6389c6ad61aa20 = function() { return logError(function (arg0) {
        const ret = arg0.maxComputeWorkgroupSizeZ;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxComputeWorkgroupStorageSize_d090d78935189091 = function() { return logError(function (arg0) {
        const ret = arg0.maxComputeWorkgroupStorageSize;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxComputeWorkgroupsPerDimension_5d5d832c21854769 = function() { return logError(function (arg0) {
        const ret = arg0.maxComputeWorkgroupsPerDimension;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxDynamicStorageBuffersPerPipelineLayout_0d5102fd812fe086 = function() { return logError(function (arg0) {
        const ret = arg0.maxDynamicStorageBuffersPerPipelineLayout;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxDynamicUniformBuffersPerPipelineLayout_fd6efab6fa18099a = function() { return logError(function (arg0) {
        const ret = arg0.maxDynamicUniformBuffersPerPipelineLayout;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxSampledTexturesPerShaderStage_4ffa7a7339d366d7 = function() { return logError(function (arg0) {
        const ret = arg0.maxSampledTexturesPerShaderStage;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxSamplersPerShaderStage_776dbf5a1fdc58b1 = function() { return logError(function (arg0) {
        const ret = arg0.maxSamplersPerShaderStage;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxStorageBufferBindingSize_4a81009504bfcacd = function() { return logError(function (arg0) {
        const ret = arg0.maxStorageBufferBindingSize;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxStorageBuffersPerShaderStage_772149c39281f13c = function() { return logError(function (arg0) {
        const ret = arg0.maxStorageBuffersPerShaderStage;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxStorageTexturesPerShaderStage_181856fa7bd31bd2 = function() { return logError(function (arg0) {
        const ret = arg0.maxStorageTexturesPerShaderStage;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxTextureArrayLayers_c50110b7591a08e7 = function() { return logError(function (arg0) {
        const ret = arg0.maxTextureArrayLayers;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxTextureDimension1D_8886fff72f64818a = function() { return logError(function (arg0) {
        const ret = arg0.maxTextureDimension1D;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxTextureDimension2D_0e30b1b618696302 = function() { return logError(function (arg0) {
        const ret = arg0.maxTextureDimension2D;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxTextureDimension3D_2f567b561a18a953 = function() { return logError(function (arg0) {
        const ret = arg0.maxTextureDimension3D;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxUniformBufferBindingSize_50a7723e932bbd63 = function() { return logError(function (arg0) {
        const ret = arg0.maxUniformBufferBindingSize;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxUniformBuffersPerShaderStage_cfac0560ee2b33a2 = function() { return logError(function (arg0) {
        const ret = arg0.maxUniformBuffersPerShaderStage;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxVertexAttributes_6bd060b2025920cc = function() { return logError(function (arg0) {
        const ret = arg0.maxVertexAttributes;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxVertexBufferArrayStride_b3c77c1ff836be9f = function() { return logError(function (arg0) {
        const ret = arg0.maxVertexBufferArrayStride;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_maxVertexBuffers_b4635256105b2915 = function() { return logError(function (arg0) {
        const ret = arg0.maxVertexBuffers;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_measure_fb7825c11612c823 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        let deferred0_0;
        let deferred0_1;
        let deferred1_0;
        let deferred1_1;
        try {
            deferred0_0 = arg0;
            deferred0_1 = arg1;
            deferred1_0 = arg2;
            deferred1_1 = arg3;
            performance.measure(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        } finally {
            wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }, arguments) };
    imports.wbg.__wbg_message_49299ab153a3b589 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.message;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_message_db8d05fa07b079c1 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.message;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_metaKey_0572b1cbcb5b272b = function() { return logError(function (arg0) {
        const ret = arg0.metaKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_metaKey_2bf7f6d8dbe23ee7 = function() { return logError(function (arg0) {
        const ret = arg0.metaKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_metaKey_448c751accad2eba = function() { return logError(function (arg0) {
        const ret = arg0.metaKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_minStorageBufferOffsetAlignment_989812b5a6a4b5e7 = function() { return logError(function (arg0) {
        const ret = arg0.minStorageBufferOffsetAlignment;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_minUniformBufferOffsetAlignment_ff7899c34a8303e7 = function() { return logError(function (arg0) {
        const ret = arg0.minUniformBufferOffsetAlignment;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_name_13bb9dc8b6e6e67c = function() { return logError(function (arg0, arg1) {
        const ret = arg1.name;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_name_c54db7e5623d6be4 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.name;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_navigator_11b7299bb7886507 = function() { return logError(function (arg0) {
        const ret = arg0.navigator;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_navigator_b49edef831236138 = function() { return logError(function (arg0) {
        const ret = arg0.navigator;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_111dde64cffa8ba1 = function() { return handleError(function () {
        const ret = new FileReader();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_1ba21ce319a06297 = function() { return logError(function () {
        const ret = new Object();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_25f239778d6112b9 = function() { return logError(function () {
        const ret = new Array();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_2bf71a3ccff43439 = function() { return logError(function (arg0) {
        const ret = new RawInterpreter(arg0 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_376247458b04c52a = function() { return handleError(function () {
        const ret = new DataTransfer();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_46c0389d2d01722a = function() { return logError(function (arg0) {
        const ret = new WebDioxusChannel(JSOwner.__wrap(arg0));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_6421f6084cc5bc5a = function() { return logError(function (arg0) {
        const ret = new Uint8Array(arg0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_6b2318b8eabfc63e = function() { return logError(function () {
        const ret = new Error();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_7c30d1f874652e62 = function() { return handleError(function (arg0, arg1) {
        const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_b546ae120718850e = function() { return logError(function () {
        const ret = new Map();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_ead2c724e8f45c17 = function() { return handleError(function (arg0, arg1) {
        const ret = new WebAssembly.Global(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_from_slice_f9c22b9153b26992 = function() { return logError(function (arg0, arg1) {
        const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_no_args_cb138f77cf6151ee = function() { return logError(function (arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_with_args_df9e7125ffe55248 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        const ret = new Function(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_with_byte_offset_and_length_d85c3da1fd8df149 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_new_with_form_4ec726a563608093 = function() { return handleError(function (arg0) {
        const ret = new FormData(arg0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_next_138a17bbf04e926c = function() { return logError(function (arg0) {
        const ret = arg0.next;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() { return handleError(function (arg0) {
        const ret = arg0.next();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_now_8cf15d6e317793e1 = function() { return logError(function (arg0) {
        const ret = arg0.now();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_of_6505a0eb509da02e = function() { return logError(function (arg0) {
        const ret = Array.of(arg0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_offsetX_cef943cf53ab2b5a = function() { return logError(function (arg0) {
        const ret = arg0.offsetX;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_offsetY_9a093457f71ef493 = function() { return logError(function (arg0) {
        const ret = arg0.offsetY;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_ok_dd98ecb60d721e20 = function() { return logError(function (arg0) {
        const ret = arg0.ok;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_ownerDocument_b75b31a8bf74b91c = function() { return logError(function (arg0) {
        const ret = arg0.ownerDocument;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_pageX_c507cebeb57ab01d = function() { return logError(function (arg0) {
        const ret = arg0.pageX;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_pageX_ce36de7e920713f7 = function() { return logError(function (arg0) {
        const ret = arg0.pageX;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_pageY_17e7067b0778ce53 = function() { return logError(function (arg0) {
        const ret = arg0.pageY;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_pageY_8c978486a596a63a = function() { return logError(function (arg0) {
        const ret = arg0.pageY;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_parentElement_f12dbbdecc1452a6 = function() { return logError(function (arg0) {
        const ret = arg0.parentElement;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_pathname_7b4426cce3f331cf = function() { return handleError(function (arg0, arg1) {
        const ret = arg1.pathname;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_performance_c77a440eff2efd9b = function() { return logError(function (arg0) {
        const ret = arg0.performance;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_pixelStorei_1956db9ae4b22c29 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.pixelStorei(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_pixelStorei_5449c87f83f25694 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.pixelStorei(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_pointerId_bf4326e151df1474 = function() { return logError(function (arg0) {
        const ret = arg0.pointerId;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_pointerType_f1939c6407f96be9 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.pointerType;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_polygonOffset_7308f17e4b9c9e6f = function() { return logError(function (arg0, arg1, arg2) {
        arg0.polygonOffset(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_polygonOffset_d405a847eb9279a1 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.polygonOffset(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_popErrorScope_4e8ec39111c15bed = function() { return logError(function (arg0) {
        const ret = arg0.popErrorScope();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_pressure_35422752c1a40439 = function() { return logError(function (arg0) {
        const ret = arg0.pressure;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_preventDefault_e97663aeeb9709d3 = function() { return logError(function (arg0) {
        arg0.preventDefault();
    }, arguments) };
    imports.wbg.__wbg_propertyName_be5dbec8c1b95cb7 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.propertyName;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_protocol_9d5f5cf57103846e = function() { return handleError(function (arg0, arg1) {
        const ret = arg1.protocol;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function() { return logError(function (arg0, arg1, arg2) {
        Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
    }, arguments) };
    imports.wbg.__wbg_pseudoElement_4e660cc69bb0a045 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.pseudoElement;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_pseudoElement_78decfd9c1e7f37c = function() { return logError(function (arg0, arg1) {
        const ret = arg1.pseudoElement;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_pushErrorScope_506d26ea9c804e6f = function() { return logError(function (arg0, arg1) {
        arg0.pushErrorScope(__wbindgen_enum_GpuErrorFilter[arg1]);
    }, arguments) };
    imports.wbg.__wbg_pushState_97ca33be0ff17d82 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.pushState(arg1, getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
    }, arguments) };
    imports.wbg.__wbg_push_7d9be8f38fc13975 = function() { return logError(function (arg0, arg1) {
        const ret = arg0.push(arg1);
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_queryCounterEXT_ecccc67a3c00d9b2 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.queryCounterEXT(arg1, arg2 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_querySelectorAll_aa1048eae18f6f1a = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.querySelectorAll(getStringFromWasm0(arg1, arg2));
        return ret;
    }, arguments) };
    imports.wbg.__wbg_querySelector_15a92ce6bed6157d = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.querySelector(getStringFromWasm0(arg1, arg2));
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_queueMicrotask_9b549dfce8865860 = function() { return logError(function (arg0) {
        const ret = arg0.queueMicrotask;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_queueMicrotask_fca69f5bfad613a5 = function() { return logError(function (arg0) {
        queueMicrotask(arg0);
    }, arguments) };
    imports.wbg.__wbg_queue_0ffbb97537a0c4ed = function() { return logError(function (arg0) {
        const ret = arg0.queue;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_radiusX_38def550a11079ca = function() { return logError(function (arg0) {
        const ret = arg0.radiusX;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_radiusY_e5774684c0b0cf69 = function() { return logError(function (arg0) {
        const ret = arg0.radiusY;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_random_cc1f9237d866d212 = function() { return logError(function () {
        const ret = Math.random();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_readAsArrayBuffer_0aca937439be3197 = function() { return handleError(function (arg0, arg1) {
        arg0.readAsArrayBuffer(arg1);
    }, arguments) };
    imports.wbg.__wbg_readAsText_576ce4784fdfa327 = function() { return handleError(function (arg0, arg1) {
        arg0.readAsText(arg1);
    }, arguments) };
    imports.wbg.__wbg_readBuffer_bbd823c99c8cb8c2 = function() { return logError(function (arg0, arg1) {
        arg0.readBuffer(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_readPixels_031b1d4c916fc4f9 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
    }, arguments) };
    imports.wbg.__wbg_readPixels_3288aabda6ab89ff = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
    }, arguments) };
    imports.wbg.__wbg_readPixels_bc06772e95599959 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
    }, arguments) };
    imports.wbg.__wbg_reason_e0d7cbbd1990668c = function() { return logError(function (arg0) {
        const ret = arg0.reason;
        return (__wbindgen_enum_GpuDeviceLostReason.indexOf(ret) + 1 || 3) - 1;
    }, arguments) };
    imports.wbg.__wbg_reload_27ff3c39a5227750 = function() { return handleError(function (arg0) {
        arg0.reload();
    }, arguments) };
    imports.wbg.__wbg_renderbufferStorageMultisample_c944aa96428a6ff6 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.renderbufferStorageMultisample(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_renderbufferStorage_4ea9706d7f996e6d = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_renderbufferStorage_95fae6488cee51e3 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_repeat_3733d1d584bf0e38 = function() { return logError(function (arg0) {
        const ret = arg0.repeat;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_replaceState_9b53ce8415668210 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.replaceState(arg1, getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
    }, arguments) };
    imports.wbg.__wbg_requestAdapter_f09d28b3f37de26c = function() { return logError(function (arg0, arg1) {
        const ret = arg0.requestAdapter(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_requestAnimationFrame_994dc4ebde22b8d9 = function() { return handleError(function (arg0, arg1) {
        const ret = arg0.requestAnimationFrame(arg1);
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_requestDevice_51509dadc50b2e9d = function() { return logError(function (arg0, arg1) {
        const ret = arg0.requestDevice(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_resolveQuerySet_bc4f3482ffb7b68b = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.resolveQuerySet(arg1, arg2 >>> 0, arg3 >>> 0, arg4, arg5 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_resolve_fd5bfbaa4ce36e1e = function() { return logError(function (arg0) {
        const ret = Promise.resolve(arg0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_result_893437a1eaacc4df = function() { return handleError(function (arg0) {
        const ret = arg0.result;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_rootBounds_c2c2a041e8379f40 = function() { return logError(function (arg0) {
        const ret = arg0.rootBounds;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_rotationAngle_a0ab68dd3196f28d = function() { return logError(function (arg0) {
        const ret = arg0.rotationAngle;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_run_51bf644e39739ca6 = function() { return logError(function (arg0, arg1, arg2) {
        try {
            var state0 = {a: arg1, b: arg2};
            var cb0 = () => {
                const a = state0.a;
                state0.a = 0;
                try {
                    return _ZN12wasm_bindgen7convert8closures1_6invoke17h2a14ce52201c771dE(a, state0.b, );
                } finally {
                    state0.a = a;
                }
            };
            const ret = arg0.run(cb0);
            _assertBoolean(ret);
            return ret;
        } finally {
            state0.a = state0.b = 0;
        }
    }, arguments) };
    imports.wbg.__wbg_run_995b2b00adbb975a = function() { return logError(function (arg0) {
        arg0.run();
    }, arguments) };
    imports.wbg.__wbg_rustRecv_dbfa12838d83231a = function() { return logError(function (arg0) {
        const ret = arg0.rustRecv();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_rustSend_b3dd3c459eea7ca6 = function() { return logError(function (arg0, arg1) {
        arg0.rustSend(arg1);
    }, arguments) };
    imports.wbg.__wbg_samplerParameterf_dc4f26238b36d07a = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.samplerParameterf(arg1, arg2 >>> 0, arg3);
    }, arguments) };
    imports.wbg.__wbg_samplerParameteri_66d42118f12ed70c = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.samplerParameteri(arg1, arg2 >>> 0, arg3);
    }, arguments) };
    imports.wbg.__wbg_saveTemplate_16846e51dbaadf41 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        var v0 = getArrayJsValueFromWasm0(arg1, arg2).slice();
        wasm.__wbindgen_free(arg1, arg2 * 4, 4);
        arg0.saveTemplate(v0, arg3);
    }, arguments) };
    imports.wbg.__wbg_scissor_04e903bd18e45083 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.scissor(arg1, arg2, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_scissor_988df87f9cf85e7e = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.scissor(arg1, arg2, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_screenX_4d261d4f77e92194 = function() { return logError(function (arg0) {
        const ret = arg0.screenX;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_screenX_80c8b173b23a4491 = function() { return logError(function (arg0) {
        const ret = arg0.screenX;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_screenY_18dc707f629386e5 = function() { return logError(function (arg0) {
        const ret = arg0.screenY;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_screenY_432cd3a76fe116ba = function() { return logError(function (arg0) {
        const ret = arg0.screenY;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_scrollHeight_3902413ae40f24a7 = function() { return logError(function (arg0) {
        const ret = arg0.scrollHeight;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_scrollIntoView_eb85b1ffb418b67c = function() { return logError(function (arg0, arg1) {
        arg0.scrollIntoView(arg1);
    }, arguments) };
    imports.wbg.__wbg_scrollLeft_fd09c4fc9e877b68 = function() { return logError(function (arg0) {
        const ret = arg0.scrollLeft;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_scrollTo_c18d69ba522ef774 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.scrollTo(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_scrollTop_76691208c28906d5 = function() { return logError(function (arg0) {
        const ret = arg0.scrollTop;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_scrollWidth_1879d4fcf958465f = function() { return logError(function (arg0) {
        const ret = arg0.scrollWidth;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_scrollX_1d9327a9ce76af46 = function() { return handleError(function (arg0) {
        const ret = arg0.scrollX;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_scrollY_559107419fb2470d = function() { return handleError(function (arg0) {
        const ret = arg0.scrollY;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_scroll_0f9b9183dd6e485b = function() { return logError(function (arg0, arg1) {
        arg0.scroll(arg1);
    }, arguments) };
    imports.wbg.__wbg_search_856af82f9dccb2ef = function() { return handleError(function (arg0, arg1) {
        const ret = arg1.search;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_setAttributeInner_acc4e02e3ffee8ca = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        setAttributeInner(arg0, getStringFromWasm0(arg1, arg2), arg3, arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
    }, arguments) };
    imports.wbg.__wbg_setAttribute_34747dd193f45828 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_setBindGroup_a81ce7b3934585bf = function() { return logError(function (arg0, arg1, arg2) {
        arg0.setBindGroup(arg1 >>> 0, arg2);
    }, arguments) };
    imports.wbg.__wbg_setBindGroup_bb0c2c05b7c49401 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        arg0.setBindGroup(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_setBlendConstant_908030325edd99fe = function() { return handleError(function (arg0, arg1) {
        arg0.setBlendConstant(arg1);
    }, arguments) };
    imports.wbg.__wbg_setData_b56422b286b18ff6 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.setData(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_setIndexBuffer_0487a271efcfe0ac = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.setIndexBuffer(arg1, __wbindgen_enum_GpuIndexFormat[arg2], arg3);
    }, arguments) };
    imports.wbg.__wbg_setIndexBuffer_97fb24e7cc5b24c0 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.setIndexBuffer(arg1, __wbindgen_enum_GpuIndexFormat[arg2], arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_setPipeline_78f8f6d440dddd25 = function() { return logError(function (arg0, arg1) {
        arg0.setPipeline(arg1);
    }, arguments) };
    imports.wbg.__wbg_setScissorRect_4db4ebbc562e249e = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.setScissorRect(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_setStencilReference_3d2d7ae6284b9f64 = function() { return logError(function (arg0, arg1) {
        arg0.setStencilReference(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_setTimeout_06477c23d31efef1 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = arg0.setTimeout(arg1, arg2);
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_setTimeout_db2dbaeefb6f39c7 = function() { return handleError(function (arg0, arg1) {
        const ret = setTimeout(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_setVertexBuffer_b0d3128a04bfd766 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_setVertexBuffer_edbff6ddb5055174 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3);
    }, arguments) };
    imports.wbg.__wbg_setViewport_b84ead683cd03d3e = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        arg0.setViewport(arg1, arg2, arg3, arg4, arg5, arg6);
    }, arguments) };
    imports.wbg.__wbg_set_3f1d0b984ed272ed = function() { return logError(function (arg0, arg1, arg2) {
        arg0[arg1] = arg2;
    }, arguments) };
    imports.wbg.__wbg_set_781438a03c0c3c81 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = Reflect.set(arg0, arg1, arg2);
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_set_7df433eea03a5c14 = function() { return logError(function (arg0, arg1, arg2) {
        arg0[arg1 >>> 0] = arg2;
    }, arguments) };
    imports.wbg.__wbg_set_a_721deab95e136b71 = function() { return logError(function (arg0, arg1) {
        arg0.a = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_access_b20bfa3ec6b65d05 = function() { return logError(function (arg0, arg1) {
        arg0.access = __wbindgen_enum_GpuStorageTextureAccess[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_address_mode_u_9c0b2104a94d10f3 = function() { return logError(function (arg0, arg1) {
        arg0.addressModeU = __wbindgen_enum_GpuAddressMode[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_address_mode_v_a9bedc188ff29608 = function() { return logError(function (arg0, arg1) {
        arg0.addressModeV = __wbindgen_enum_GpuAddressMode[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_address_mode_w_5774889145ce3789 = function() { return logError(function (arg0, arg1) {
        arg0.addressModeW = __wbindgen_enum_GpuAddressMode[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_alpha_2c7bdc9da833b6c2 = function() { return logError(function (arg0, arg1) {
        arg0.alpha = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_alpha_mode_fc3528d234b1fefa = function() { return logError(function (arg0, arg1) {
        arg0.alphaMode = __wbindgen_enum_GpuCanvasAlphaMode[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_alpha_to_coverage_enabled_314ce1ca1759b395 = function() { return logError(function (arg0, arg1) {
        arg0.alphaToCoverageEnabled = arg1 !== 0;
    }, arguments) };
    imports.wbg.__wbg_set_array_layer_count_3c7942d623042874 = function() { return logError(function (arg0, arg1) {
        arg0.arrayLayerCount = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_array_stride_4b36d0822dea74a8 = function() { return logError(function (arg0, arg1) {
        arg0.arrayStride = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_aspect_48152f4e4f8231ae = function() { return logError(function (arg0, arg1) {
        arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_aspect_f06e234d0aacd1a6 = function() { return logError(function (arg0, arg1) {
        arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_attributes_382cc084e6792c33 = function() { return logError(function (arg0, arg1) {
        arg0.attributes = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_b_f53c2f10173c804f = function() { return logError(function (arg0, arg1) {
        arg0.b = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_base_array_layer_a5b968338c5c56b6 = function() { return logError(function (arg0, arg1) {
        arg0.baseArrayLayer = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_base_mip_level_e3288c2d851da708 = function() { return logError(function (arg0, arg1) {
        arg0.baseMipLevel = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_bc3a432bdcd60886 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.set(arg1, arg2 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_set_beginning_of_pass_write_index_35dcbf135e4f9d61 = function() { return logError(function (arg0, arg1) {
        arg0.beginningOfPassWriteIndex = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_beginning_of_pass_write_index_703995fcd4f84112 = function() { return logError(function (arg0, arg1) {
        arg0.beginningOfPassWriteIndex = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_behavior_334841a9fd85b905 = function() { return logError(function (arg0, arg1) {
        arg0.behavior = __wbindgen_enum_ScrollBehavior[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_behavior_c6b0a0729df3dbc8 = function() { return logError(function (arg0, arg1) {
        arg0.behavior = __wbindgen_enum_ScrollBehavior[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_bind_group_layouts_8de6e109dd34a448 = function() { return logError(function (arg0, arg1) {
        arg0.bindGroupLayouts = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_binding_5276d6202fceba46 = function() { return logError(function (arg0, arg1) {
        arg0.binding = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_binding_9e9ed8b6e1418176 = function() { return logError(function (arg0, arg1) {
        arg0.binding = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_blend_6828ff186670f414 = function() { return logError(function (arg0, arg1) {
        arg0.blend = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_block_c4027502c06aed10 = function() { return logError(function (arg0, arg1) {
        arg0.block = __wbindgen_enum_ScrollLogicalPosition[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_buffer_1acdac44d9638973 = function() { return logError(function (arg0, arg1) {
        arg0.buffer = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_buffer_1d16f319d6410e50 = function() { return logError(function (arg0, arg1) {
        arg0.buffer = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_buffer_74b7b0adf855cf1a = function() { return logError(function (arg0, arg1) {
        arg0.buffer = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_buffers_53e83b7c7a5c95aa = function() { return logError(function (arg0, arg1) {
        arg0.buffers = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_bytes_per_row_9249690c44f83135 = function() { return logError(function (arg0, arg1) {
        arg0.bytesPerRow = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_bytes_per_row_ffe6655e20551429 = function() { return logError(function (arg0, arg1) {
        arg0.bytesPerRow = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_clear_value_f82fff01ed0b5c35 = function() { return logError(function (arg0, arg1) {
        arg0.clearValue = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_code_6b6ad02fc1705aa2 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.code = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_color_0df2c5f47a951ac1 = function() { return logError(function (arg0, arg1) {
        arg0.color = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_color_attachments_de625dd9a4850a13 = function() { return logError(function (arg0, arg1) {
        arg0.colorAttachments = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_color_formats_8619c2e6ee4a59ac = function() { return logError(function (arg0, arg1) {
        arg0.colorFormats = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_compare_1b67d8112d05628e = function() { return logError(function (arg0, arg1) {
        arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_compare_8fbddcdd4781f49a = function() { return logError(function (arg0, arg1) {
        arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_compute_be8170281283a813 = function() { return logError(function (arg0, arg1) {
        arg0.compute = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_count_56fa496d577f05ff = function() { return logError(function (arg0, arg1) {
        arg0.count = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_count_e8b681b1185cf5da = function() { return logError(function (arg0, arg1) {
        arg0.count = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_cull_mode_74bc6eaab528c94b = function() { return logError(function (arg0, arg1) {
        arg0.cullMode = __wbindgen_enum_GpuCullMode[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_depth_bias_cdcc35c6971d19cd = function() { return logError(function (arg0, arg1) {
        arg0.depthBias = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_depth_bias_clamp_57801e26f66496d9 = function() { return logError(function (arg0, arg1) {
        arg0.depthBiasClamp = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_depth_bias_slope_scale_81699f807bd5a647 = function() { return logError(function (arg0, arg1) {
        arg0.depthBiasSlopeScale = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_depth_clear_value_9801aa9eff7645df = function() { return logError(function (arg0, arg1) {
        arg0.depthClearValue = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_depth_compare_53d249a136855bd8 = function() { return logError(function (arg0, arg1) {
        arg0.depthCompare = __wbindgen_enum_GpuCompareFunction[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_depth_fail_op_2e4767995acd4c0a = function() { return logError(function (arg0, arg1) {
        arg0.depthFailOp = __wbindgen_enum_GpuStencilOperation[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_depth_load_op_af0b0f05e83f6571 = function() { return logError(function (arg0, arg1) {
        arg0.depthLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_depth_or_array_layers_5d480fc05509ea0c = function() { return logError(function (arg0, arg1) {
        arg0.depthOrArrayLayers = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_depth_read_only_a7b7224074e024d3 = function() { return logError(function (arg0, arg1) {
        arg0.depthReadOnly = arg1 !== 0;
    }, arguments) };
    imports.wbg.__wbg_set_depth_read_only_c99e728969e6bb74 = function() { return logError(function (arg0, arg1) {
        arg0.depthReadOnly = arg1 !== 0;
    }, arguments) };
    imports.wbg.__wbg_set_depth_stencil_2bb2fcea55783858 = function() { return logError(function (arg0, arg1) {
        arg0.depthStencil = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_depth_stencil_attachment_dcbd5b74e4350e16 = function() { return logError(function (arg0, arg1) {
        arg0.depthStencilAttachment = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_depth_stencil_format_0f8257cabb41cd68 = function() { return logError(function (arg0, arg1) {
        arg0.depthStencilFormat = __wbindgen_enum_GpuTextureFormat[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_depth_store_op_40dfd99c7e42f894 = function() { return logError(function (arg0, arg1) {
        arg0.depthStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_depth_write_enabled_4368a2fe5d258cb0 = function() { return logError(function (arg0, arg1) {
        arg0.depthWriteEnabled = arg1 !== 0;
    }, arguments) };
    imports.wbg.__wbg_set_device_d372d6aa06f20cae = function() { return logError(function (arg0, arg1) {
        arg0.device = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_dimension_268b2b7bfc3e2bb8 = function() { return logError(function (arg0, arg1) {
        arg0.dimension = __wbindgen_enum_GpuTextureDimension[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_dimension_359b229ea1b67a77 = function() { return logError(function (arg0, arg1) {
        arg0.dimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_dropEffect_b52afb6f5b264a1e = function() { return logError(function (arg0, arg1, arg2) {
        arg0.dropEffect = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_dst_factor_96e73b9eaedeb23e = function() { return logError(function (arg0, arg1) {
        arg0.dstFactor = __wbindgen_enum_GpuBlendFactor[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_efaaf145b9377369 = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.set(arg1, arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_set_effectAllowed_f9573b9a06724490 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.effectAllowed = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_end_of_pass_write_index_71e7659a9d2a9d60 = function() { return logError(function (arg0, arg1) {
        arg0.endOfPassWriteIndex = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_end_of_pass_write_index_bbe4757d0b985fd3 = function() { return logError(function (arg0, arg1) {
        arg0.endOfPassWriteIndex = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_entries_5941f16619f54d42 = function() { return logError(function (arg0, arg1) {
        arg0.entries = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_entries_97a6ad10aa7fa4d1 = function() { return logError(function (arg0, arg1) {
        arg0.entries = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_entry_point_a858879f63ec2236 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.entryPoint = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_entry_point_a8ce0b22c20548b0 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.entryPoint = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_entry_point_ec35a2279c4d6dd5 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.entryPoint = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_fail_op_d55bda42958efa98 = function() { return logError(function (arg0, arg1) {
        arg0.failOp = __wbindgen_enum_GpuStencilOperation[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_flip_y_bd2d5ada3a89715f = function() { return logError(function (arg0, arg1) {
        arg0.flipY = arg1 !== 0;
    }, arguments) };
    imports.wbg.__wbg_set_format_69ba449c0e080708 = function() { return logError(function (arg0, arg1) {
        arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_format_713b9e90b13df6aa = function() { return logError(function (arg0, arg1) {
        arg0.format = __wbindgen_enum_GpuVertexFormat[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_format_76bcf93126fcdc9d = function() { return logError(function (arg0, arg1) {
        arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_format_970299d3f84a8f20 = function() { return logError(function (arg0, arg1) {
        arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_format_a8a60feb127f0971 = function() { return logError(function (arg0, arg1) {
        arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_format_beb33029aea4cf8e = function() { return logError(function (arg0, arg1) {
        arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_format_f6ec428901712514 = function() { return logError(function (arg0, arg1) {
        arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_fragment_0f23dfb67b3e84ab = function() { return logError(function (arg0, arg1) {
        arg0.fragment = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_front_face_c80337acd997f8c6 = function() { return logError(function (arg0, arg1) {
        arg0.frontFace = __wbindgen_enum_GpuFrontFace[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_g_7eb6b5e67456a09e = function() { return logError(function (arg0, arg1) {
        arg0.g = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_has_dynamic_offset_b34dfdba692a7959 = function() { return logError(function (arg0, arg1) {
        arg0.hasDynamicOffset = arg1 !== 0;
    }, arguments) };
    imports.wbg.__wbg_set_height_6f8f8ef4cb40e496 = function() { return logError(function (arg0, arg1) {
        arg0.height = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_height_a7439239ff109215 = function() { return logError(function (arg0, arg1) {
        arg0.height = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_height_afe09c24165867f7 = function() { return logError(function (arg0, arg1) {
        arg0.height = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_href_851b22e9bb498129 = function() { return handleError(function (arg0, arg1, arg2) {
        arg0.href = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_inline_2c787f025e559c6e = function() { return logError(function (arg0, arg1) {
        arg0.inline = __wbindgen_enum_ScrollLogicalPosition[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_label_0fab35538b0283a8 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_190cc9c7ee762bf6 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_1df8805b2aad72d7 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_42bf9d58f7b48944 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_460a52030d604dd7 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_57008c2e11276b5e = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_66db708c47a585b2 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_68cd87490e02e1de = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_76b058f0224eb49e = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_89c327fa94d8076b = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_969d6f8279c74456 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_a0c41069e355431e = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_c14214ffbf6e5c4a = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_ca2c132e2b646244 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_e47ee707d3281b5c = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_e6fab993e10f1dd3 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_label_f9a45e9ef445b781 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.label = getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_layout_67a29edc6247c437 = function() { return logError(function (arg0, arg1) {
        arg0.layout = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_layout_758d30edbd6ea91c = function() { return logError(function (arg0, arg1) {
        arg0.layout = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_layout_cade01d14a230b20 = function() { return logError(function (arg0, arg1) {
        arg0.layout = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_left_4ee87c9515441340 = function() { return logError(function (arg0, arg1) {
        arg0.left = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_load_op_5644a3bf70f4f76c = function() { return logError(function (arg0, arg1) {
        arg0.loadOp = __wbindgen_enum_GpuLoadOp[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_lod_max_clamp_d80060a9922f9fe3 = function() { return logError(function (arg0, arg1) {
        arg0.lodMaxClamp = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_lod_min_clamp_bee469ae69d038f0 = function() { return logError(function (arg0, arg1) {
        arg0.lodMinClamp = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_mag_filter_f50646cfdc01700d = function() { return logError(function (arg0, arg1) {
        arg0.magFilter = __wbindgen_enum_GpuFilterMode[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_mapped_at_creation_0dc5796d4e90ab4b = function() { return logError(function (arg0, arg1) {
        arg0.mappedAtCreation = arg1 !== 0;
    }, arguments) };
    imports.wbg.__wbg_set_mask_800b15ad78613be8 = function() { return logError(function (arg0, arg1) {
        arg0.mask = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_max_anisotropy_83ac2a8bef9f9ec8 = function() { return logError(function (arg0, arg1) {
        arg0.maxAnisotropy = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_min_binding_size_20ca594cd6d93818 = function() { return logError(function (arg0, arg1) {
        arg0.minBindingSize = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_min_filter_8ffc9e1ac6b4149f = function() { return logError(function (arg0, arg1) {
        arg0.minFilter = __wbindgen_enum_GpuFilterMode[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_mip_level_4e2a9d8b9b47208e = function() { return logError(function (arg0, arg1) {
        arg0.mipLevel = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_mip_level_6f507098915add77 = function() { return logError(function (arg0, arg1) {
        arg0.mipLevel = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_mip_level_count_5e59806cbcf116e9 = function() { return logError(function (arg0, arg1) {
        arg0.mipLevelCount = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_mip_level_count_f896fe8cbb669df2 = function() { return logError(function (arg0, arg1) {
        arg0.mipLevelCount = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_mipmap_filter_037575f2e647f024 = function() { return logError(function (arg0, arg1) {
        arg0.mipmapFilter = __wbindgen_enum_GpuMipmapFilterMode[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_module_4c73bb35cb0beb0b = function() { return logError(function (arg0, arg1) {
        arg0.module = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_module_7d5ff73dea7c42f9 = function() { return logError(function (arg0, arg1) {
        arg0.module = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_module_ca21130b3f66ea5d = function() { return logError(function (arg0, arg1) {
        arg0.module = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_multisample_4f57dcaa4144a62f = function() { return logError(function (arg0, arg1) {
        arg0.multisample = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_multisampled_0bb9fc1b577bf11a = function() { return logError(function (arg0, arg1) {
        arg0.multisampled = arg1 !== 0;
    }, arguments) };
    imports.wbg.__wbg_set_offset_67ee100819c122f2 = function() { return logError(function (arg0, arg1) {
        arg0.offset = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_offset_721180fefc9711a9 = function() { return logError(function (arg0, arg1) {
        arg0.offset = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_offset_a8194a4fcfff8910 = function() { return logError(function (arg0, arg1) {
        arg0.offset = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_offset_d37e5fa34e9ded2e = function() { return logError(function (arg0, arg1) {
        arg0.offset = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_onclose_032729b3d7ed7a9e = function() { return logError(function (arg0, arg1) {
        arg0.onclose = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_onload_3ff2f72af5cc911d = function() { return logError(function (arg0, arg1) {
        arg0.onload = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_onmessage_71321d0bed69856c = function() { return logError(function (arg0, arg1) {
        arg0.onmessage = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_onopen_6d4abedb27ba5656 = function() { return logError(function (arg0, arg1) {
        arg0.onopen = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_onuncapturederror_3449cdb695f16431 = function() { return logError(function (arg0, arg1) {
        arg0.onuncapturederror = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_operation_173958551af7f4f2 = function() { return logError(function (arg0, arg1) {
        arg0.operation = __wbindgen_enum_GpuBlendOperation[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_origin_13b56d848aada680 = function() { return logError(function (arg0, arg1) {
        arg0.origin = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_origin_e26b73e77b3e275d = function() { return logError(function (arg0, arg1) {
        arg0.origin = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_origin_f72dc9fdb8a63f0c = function() { return logError(function (arg0, arg1) {
        arg0.origin = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_pass_op_070547fd6160a00d = function() { return logError(function (arg0, arg1) {
        arg0.passOp = __wbindgen_enum_GpuStencilOperation[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_power_preference_1f3351e5d2acf765 = function() { return logError(function (arg0, arg1) {
        arg0.powerPreference = __wbindgen_enum_GpuPowerPreference[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_premultiplied_alpha_de7d1cc1ae4ca1a8 = function() { return logError(function (arg0, arg1) {
        arg0.premultipliedAlpha = arg1 !== 0;
    }, arguments) };
    imports.wbg.__wbg_set_primitive_ee18492ab93953bc = function() { return logError(function (arg0, arg1) {
        arg0.primitive = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_query_set_3b14f95f9bd114db = function() { return logError(function (arg0, arg1) {
        arg0.querySet = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_query_set_4475a28689089d2c = function() { return logError(function (arg0, arg1) {
        arg0.querySet = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_r_a4e2f60e3466da86 = function() { return logError(function (arg0, arg1) {
        arg0.r = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_required_features_fc44bc3433300ee3 = function() { return logError(function (arg0, arg1) {
        arg0.requiredFeatures = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_resolve_target_c4b519cab7eb42b7 = function() { return logError(function (arg0, arg1) {
        arg0.resolveTarget = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_resource_1659f5a29a2e0541 = function() { return logError(function (arg0, arg1) {
        arg0.resource = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_rows_per_image_53ed2c633b1adfcc = function() { return logError(function (arg0, arg1) {
        arg0.rowsPerImage = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_rows_per_image_b16fc77b3e7f5230 = function() { return logError(function (arg0, arg1) {
        arg0.rowsPerImage = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_sample_count_ce64315c0b08bd90 = function() { return logError(function (arg0, arg1) {
        arg0.sampleCount = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_sample_count_e88d044f067a2241 = function() { return logError(function (arg0, arg1) {
        arg0.sampleCount = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_sample_type_c0e25b966db74174 = function() { return logError(function (arg0, arg1) {
        arg0.sampleType = __wbindgen_enum_GpuTextureSampleType[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_sampler_a778272f31d31ce5 = function() { return logError(function (arg0, arg1) {
        arg0.sampler = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_scrollRestoration_92f4d7fa7576128f = function() { return handleError(function (arg0, arg1) {
        arg0.scrollRestoration = __wbindgen_enum_ScrollRestoration[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_shader_location_985046f48e76573f = function() { return logError(function (arg0, arg1) {
        arg0.shaderLocation = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_size_23676383c9c0732f = function() { return logError(function (arg0, arg1) {
        arg0.size = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_size_51616eaf8209c58b = function() { return logError(function (arg0, arg1) {
        arg0.size = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_size_5878aadcd23673cf = function() { return logError(function (arg0, arg1) {
        arg0.size = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_source_b1e66b73aa8a4ebc = function() { return logError(function (arg0, arg1) {
        arg0.source = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_src_factor_04ce8874f1bff5a8 = function() { return logError(function (arg0, arg1) {
        arg0.srcFactor = __wbindgen_enum_GpuBlendFactor[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_stencil_back_4b20ecfcd4c4816a = function() { return logError(function (arg0, arg1) {
        arg0.stencilBack = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_stencil_clear_value_7ba82e1993788f37 = function() { return logError(function (arg0, arg1) {
        arg0.stencilClearValue = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_stencil_front_1ca3b695f7c42f6a = function() { return logError(function (arg0, arg1) {
        arg0.stencilFront = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_stencil_load_op_b65c60a0077315cd = function() { return logError(function (arg0, arg1) {
        arg0.stencilLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_stencil_read_mask_4f5b98747141e796 = function() { return logError(function (arg0, arg1) {
        arg0.stencilReadMask = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_stencil_read_only_6a18fc38e0d8494b = function() { return logError(function (arg0, arg1) {
        arg0.stencilReadOnly = arg1 !== 0;
    }, arguments) };
    imports.wbg.__wbg_set_stencil_read_only_9006a99a91d198e9 = function() { return logError(function (arg0, arg1) {
        arg0.stencilReadOnly = arg1 !== 0;
    }, arguments) };
    imports.wbg.__wbg_set_stencil_store_op_4f00c5eca345c145 = function() { return logError(function (arg0, arg1) {
        arg0.stencilStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_stencil_write_mask_e37a7214d84ace99 = function() { return logError(function (arg0, arg1) {
        arg0.stencilWriteMask = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_step_mode_7d58d75e6547a7a6 = function() { return logError(function (arg0, arg1) {
        arg0.stepMode = __wbindgen_enum_GpuVertexStepMode[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_storage_texture_2987339fec972d54 = function() { return logError(function (arg0, arg1) {
        arg0.storageTexture = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_store_op_c62dd050b5806095 = function() { return logError(function (arg0, arg1) {
        arg0.storeOp = __wbindgen_enum_GpuStoreOp[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_strip_index_format_3e4893749b3f00b0 = function() { return logError(function (arg0, arg1) {
        arg0.stripIndexFormat = __wbindgen_enum_GpuIndexFormat[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_targets_0ef1de33af7253a6 = function() { return logError(function (arg0, arg1) {
        arg0.targets = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_textContent_e461237efe237e01 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.textContent = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_set_texture_2553e9c3ae6f7687 = function() { return logError(function (arg0, arg1) {
        arg0.texture = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_texture_28ef6c52713faba9 = function() { return logError(function (arg0, arg1) {
        arg0.texture = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_texture_f62859f817324dd1 = function() { return logError(function (arg0, arg1) {
        arg0.texture = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_timestamp_writes_1995524c3a31cb8f = function() { return logError(function (arg0, arg1) {
        arg0.timestampWrites = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_timestamp_writes_bebe8db3de77d9e1 = function() { return logError(function (arg0, arg1) {
        arg0.timestampWrites = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_top_24ffb0a67b7cb634 = function() { return logError(function (arg0, arg1) {
        arg0.top = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_topology_3d9b2f0ffe2e350c = function() { return logError(function (arg0, arg1) {
        arg0.topology = __wbindgen_enum_GpuPrimitiveTopology[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_type_0b59dd5f4721c490 = function() { return logError(function (arg0, arg1) {
        arg0.type = __wbindgen_enum_GpuSamplerBindingType[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_type_8c8bbfab4cf7e32e = function() { return logError(function (arg0, arg1) {
        arg0.type = __wbindgen_enum_GpuBufferBindingType[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_type_e1183496fe921f94 = function() { return logError(function (arg0, arg1) {
        arg0.type = __wbindgen_enum_GpuQueryType[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_usage_44ebc3b496e60ff4 = function() { return logError(function (arg0, arg1) {
        arg0.usage = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_usage_4cf7b16df5617a46 = function() { return logError(function (arg0, arg1) {
        arg0.usage = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_usage_c45cca4a5b9f8376 = function() { return logError(function (arg0, arg1) {
        arg0.usage = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_usage_e58b3c3ce83fbbda = function() { return logError(function (arg0, arg1) {
        arg0.usage = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_vertex_6144c56d98e2314a = function() { return logError(function (arg0, arg1) {
        arg0.vertex = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_view_4bc3dfcbfc8a58ba = function() { return logError(function (arg0, arg1) {
        arg0.view = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_view_8d0b0055b6ef07e3 = function() { return logError(function (arg0, arg1) {
        arg0.view = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_view_dimension_afac48443b8fb565 = function() { return logError(function (arg0, arg1) {
        arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_view_dimension_f5d4b5336a27d302 = function() { return logError(function (arg0, arg1) {
        arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
    }, arguments) };
    imports.wbg.__wbg_set_view_formats_0cfe174ac882efaf = function() { return logError(function (arg0, arg1) {
        arg0.viewFormats = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_view_formats_c566feb1da7b1925 = function() { return logError(function (arg0, arg1) {
        arg0.viewFormats = arg1;
    }, arguments) };
    imports.wbg.__wbg_set_visibility_7245f1acbedb4ff4 = function() { return logError(function (arg0, arg1) {
        arg0.visibility = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_width_056381a7176ba440 = function() { return logError(function (arg0, arg1) {
        arg0.width = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_width_0a22c810f06a5152 = function() { return logError(function (arg0, arg1) {
        arg0.width = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_width_7ff7a22c6e9f423e = function() { return logError(function (arg0, arg1) {
        arg0.width = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_write_mask_c381ff702509999c = function() { return logError(function (arg0, arg1) {
        arg0.writeMask = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_x_6e550cba86f408f0 = function() { return logError(function (arg0, arg1) {
        arg0.x = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_x_941ab227b0ea435d = function() { return logError(function (arg0, arg1) {
        arg0.x = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_y_16ff3ff771600f8c = function() { return logError(function (arg0, arg1) {
        arg0.y = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_y_e9ed0be0aad66dd7 = function() { return logError(function (arg0, arg1) {
        arg0.y = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_set_z_b2c09b24c996ee06 = function() { return logError(function (arg0, arg1) {
        arg0.z = arg1 >>> 0;
    }, arguments) };
    imports.wbg.__wbg_shaderSource_8a7a30baeaf655d5 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_shaderSource_aea71cfa376fc985 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_shiftKey_44c751cbb8c6c454 = function() { return logError(function (arg0) {
        const ret = arg0.shiftKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_shiftKey_a6df227a917d203b = function() { return logError(function (arg0) {
        const ret = arg0.shiftKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_shiftKey_d2640abcfa98acec = function() { return logError(function (arg0) {
        const ret = arg0.shiftKey;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_size_73bdfb6d5ffd9c4b = function() { return logError(function (arg0) {
        const ret = arg0.size;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_size_82fbdb656de23326 = function() { return logError(function (arg0) {
        const ret = arg0.size;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_stack_d357e6e5d50ff2d4 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.stack;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_state_f49c29369f3eefd7 = function() { return handleError(function (arg0) {
        const ret = arg0.state;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_static_accessor_GLOBAL_769e6b65d6557335 = function() { return logError(function () {
        const ret = typeof global === 'undefined' ? null : global;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1 = function() { return logError(function () {
        const ret = typeof globalThis === 'undefined' ? null : globalThis;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_static_accessor_SELF_08f5a74c69739274 = function() { return logError(function () {
        const ret = typeof self === 'undefined' ? null : self;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_static_accessor_WINDOW_a8924b26aa92d024 = function() { return logError(function () {
        const ret = typeof window === 'undefined' ? null : window;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_statusText_0eec2bbb2c8f22e2 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.statusText;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_stencilFuncSeparate_8837ff1279f2bcd8 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_stencilFuncSeparate_b6b919cb79b36c7f = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_stencilMaskSeparate_8780b512ad994312 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_stencilMaskSeparate_fdaf7687ee443945 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_stencilMask_729d1b04c4560c92 = function() { return logError(function (arg0, arg1) {
        arg0.stencilMask(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_stencilMask_8763a80561b98dde = function() { return logError(function (arg0, arg1) {
        arg0.stencilMask(arg1 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_stencilOpSeparate_126147c7d73a0e8e = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_stencilOpSeparate_d1770154b137259f = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_stringify_655a6390e1f5eb6b = function() { return handleError(function (arg0) {
        const ret = JSON.stringify(arg0);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_submit_252766c4e0945cee = function() { return logError(function (arg0, arg1) {
        arg0.submit(arg1);
    }, arguments) };
    imports.wbg.__wbg_tangentialPressure_351dec83a9923665 = function() { return logError(function (arg0) {
        const ret = arg0.tangentialPressure;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_targetTouches_4ad109409736cd74 = function() { return logError(function (arg0) {
        const ret = arg0.targetTouches;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_target_0e3e05a6263c37a0 = function() { return logError(function (arg0) {
        const ret = arg0.target;
        return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
    }, arguments) };
    imports.wbg.__wbg_texImage2D_9626e500f8562784 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_texImage2D_d2480404caf2a35b = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_texImage2D_d37b35cd7e971b0d = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_texImage3D_0c45150b4a96b45e = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
        arg0.texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, arg10);
    }, arguments) };
    imports.wbg.__wbg_texImage3D_0c9cf74f3c3c59fe = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
        arg0.texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, arg10);
    }, arguments) };
    imports.wbg.__wbg_texParameteri_035e104616b395e0 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
    }, arguments) };
    imports.wbg.__wbg_texParameteri_3a52bfd2ef280632 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
    }, arguments) };
    imports.wbg.__wbg_texStorage2D_21e779f76539549d = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.texStorage2D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_texStorage3D_0b08c3a68b3d128e = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        arg0.texStorage3D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5, arg6);
    }, arguments) };
    imports.wbg.__wbg_texSubImage2D_1f2ed8e2272ea41a = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_texSubImage2D_38b182399f10128e = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_texSubImage2D_65b65c3b76d83400 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_texSubImage2D_6b92ceb1553771fc = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_texSubImage2D_7b89a7441b2a9257 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_texSubImage2D_b3a850c16797a6b2 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_texSubImage2D_dc6a2bd41673ac84 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_texSubImage2D_dc95b375d770251c = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
        arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
    }, arguments) };
    imports.wbg.__wbg_texSubImage3D_60e409379482084f = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
        arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
    }, arguments) };
    imports.wbg.__wbg_texSubImage3D_78f029ad7e55ca39 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
        arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
    }, arguments) };
    imports.wbg.__wbg_texSubImage3D_9f46bb4a0a79d9e3 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
        arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
    }, arguments) };
    imports.wbg.__wbg_texSubImage3D_a86271ca5befc16d = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
        arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
    }, arguments) };
    imports.wbg.__wbg_texSubImage3D_af2ddc81a17c35ce = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
        arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
    }, arguments) };
    imports.wbg.__wbg_texSubImage3D_da65e56061783a1b = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
        arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
    }, arguments) };
    imports.wbg.__wbg_texSubImage3D_e878e89d319561b4 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
        arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
    }, arguments) };
    imports.wbg.__wbg_textContent_8083fbe3416e42c7 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.textContent;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_then_429f7caf1026411d = function() { return logError(function (arg0, arg1, arg2) {
        const ret = arg0.then(arg1, arg2);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_then_4f95312d68691235 = function() { return logError(function (arg0, arg1) {
        const ret = arg0.then(arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_tiltX_6908bb088fd3e838 = function() { return logError(function (arg0) {
        const ret = arg0.tiltX;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_tiltY_95f7325bde3bbafd = function() { return logError(function (arg0) {
        const ret = arg0.tiltY;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_time_86c567dbb40bc272 = function() { return logError(function (arg0) {
        const ret = arg0.time;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_top_7d5b82a2c5d7f13f = function() { return logError(function (arg0) {
        const ret = arg0.top;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_touches_1cf6f6e3e2a7e85d = function() { return logError(function (arg0) {
        const ret = arg0.touches;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_twist_d3bca3a6ae6fcfca = function() { return logError(function (arg0) {
        const ret = arg0.twist;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_type_4bea23a78318af32 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.type;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_type_cb833fc71b5282fb = function() { return logError(function (arg0, arg1) {
        const ret = arg1.type;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_type_cbb6d97cde55e808 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.type;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_uniform1f_058417475b9966c8 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.uniform1f(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_uniform1f_b47da9590d2c2cf1 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.uniform1f(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_uniform1i_85131b7388bc8e3f = function() { return logError(function (arg0, arg1, arg2) {
        arg0.uniform1i(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_uniform1i_e48736e68cd30ed1 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.uniform1i(arg1, arg2);
    }, arguments) };
    imports.wbg.__wbg_uniform1ui_03b9da58a76f91cf = function() { return logError(function (arg0, arg1, arg2) {
        arg0.uniform1ui(arg1, arg2 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_uniform2fv_708680e0e9752754 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform2fv(arg1, getArrayF32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform2fv_908e28848891e2bf = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform2fv(arg1, getArrayF32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform2iv_3f71696540a8b2ea = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform2iv(arg1, getArrayI32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform2iv_a0cc429953135311 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform2iv(arg1, getArrayI32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform2uiv_8b142338906d7ff5 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform2uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform3fv_aa655890f3512e6b = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform3fv(arg1, getArrayF32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform3fv_e58ff84eca16cad5 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform3fv(arg1, getArrayF32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform3iv_624ea88531cdde63 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform3iv(arg1, getArrayI32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform3iv_afc54662b2809357 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform3iv(arg1, getArrayI32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform3uiv_ff68240586289823 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform3uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform4f_1e4aad4d202f9f6c = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.uniform4f(arg1, arg2, arg3, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_uniform4f_f0ae29c4c1eb79e0 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.uniform4f(arg1, arg2, arg3, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_uniform4fv_2521ae2ffe6e215c = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform4fv(arg1, getArrayF32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform4fv_9913dec8e48633d9 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform4fv(arg1, getArrayF32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform4iv_6d0331d24af48aea = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform4iv(arg1, getArrayI32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform4iv_9e38dad2e14636c0 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform4iv(arg1, getArrayI32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniform4uiv_766efbfa63685f92 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniform4uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
    }, arguments) };
    imports.wbg.__wbg_uniformBlockBinding_83eb9ed3f1189da9 = function() { return logError(function (arg0, arg1, arg2, arg3) {
        arg0.uniformBlockBinding(arg1, arg2 >>> 0, arg3 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix2fv_13787967d812a489 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix2fv_90702a9a8694e69b = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix2x3fv_f0dad33c79231b14 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix2x3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix2x4fv_c11cac98bdf0e214 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix2x4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix3fv_3b2ed3a816d45543 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix3fv_eb9d7317ce9cb6b5 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix3x2fv_11d50f0b78d73578 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix3x2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix3x4fv_a78caffb62d235c9 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix3x4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix4fv_54fea58f845bbc0e = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix4fv_62e9aaf2b4268690 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix4x2fv_692f10b2150c1ef9 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix4x2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_uniformMatrix4x3fv_45f7b122755e52e6 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.uniformMatrix4x3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
    }, arguments) };
    imports.wbg.__wbg_unmap_7b299155f31a9d79 = function() { return logError(function (arg0) {
        arg0.unmap();
    }, arguments) };
    imports.wbg.__wbg_update_memory_8a2de58b3e57d851 = function() { return logError(function (arg0, arg1) {
        arg0.update_memory(arg1);
    }, arguments) };
    imports.wbg.__wbg_usage_7d38adc6eaf96849 = function() { return logError(function (arg0) {
        const ret = arg0.usage;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_useProgram_142dd02d095f80f1 = function() { return logError(function (arg0, arg1) {
        arg0.useProgram(arg1);
    }, arguments) };
    imports.wbg.__wbg_useProgram_4632a62f19deea67 = function() { return logError(function (arg0, arg1) {
        arg0.useProgram(arg1);
    }, arguments) };
    imports.wbg.__wbg_valueOf_663ea9f1ad0d6eda = function() { return logError(function (arg0) {
        const ret = arg0.valueOf();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_value_2c75ca481407d038 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.value;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_value_57b7b035e117f7ee = function() { return logError(function (arg0) {
        const ret = arg0.value;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_value_5ea6e5ab9f609290 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.value;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_value_db52a130d93fb044 = function() { return logError(function (arg0, arg1) {
        const ret = arg1.value;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_vertexAttribDivisorANGLE_0797a329758e2a28 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.vertexAttribDivisorANGLE(arg1 >>> 0, arg2 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_vertexAttribDivisor_4f37e0f7c1197d16 = function() { return logError(function (arg0, arg1, arg2) {
        arg0.vertexAttribDivisor(arg1 >>> 0, arg2 >>> 0);
    }, arguments) };
    imports.wbg.__wbg_vertexAttribIPointer_87d7fcce484093c9 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.vertexAttribIPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_vertexAttribPointer_5c516f4c675103bf = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
    }, arguments) };
    imports.wbg.__wbg_vertexAttribPointer_880223685613a791 = function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
        arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
    }, arguments) };
    imports.wbg.__wbg_videoHeight_5a251e5cd2cd8ea8 = function() { return logError(function (arg0) {
        const ret = arg0.videoHeight;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_videoWidth_8fb6bad8e52949c8 = function() { return logError(function (arg0) {
        const ret = arg0.videoWidth;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_viewport_1b0f7b63c424b52f = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.viewport(arg1, arg2, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_viewport_ceaa5c1a061b76df = function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.viewport(arg1, arg2, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_weak_ecc8615497afb681 = function() { return logError(function (arg0) {
        const ret = arg0.weak();
        return ret;
    }, arguments) };
    imports.wbg.__wbg_wgslLanguageFeatures_95d24c58747b65ed = function() { return logError(function (arg0) {
        const ret = arg0.wgslLanguageFeatures;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_width_2ea6e6731430a171 = function() { return logError(function (arg0) {
        const ret = arg0.width;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_width_30d712cfe70e4fae = function() { return logError(function (arg0) {
        const ret = arg0.width;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_width_73a6511a2370c184 = function() { return logError(function (arg0) {
        const ret = arg0.width;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_width_9ab139dc647aa315 = function() { return logError(function (arg0) {
        const ret = arg0.width;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_width_a56ce605317f173f = function() { return logError(function (arg0) {
        const ret = arg0.width;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_width_b3ccec7cffad7d46 = function() { return logError(function (arg0) {
        const ret = arg0.width;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_width_dd0cfe94d42f5143 = function() { return logError(function (arg0) {
        const ret = arg0.width;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_width_f13d2e86324fc226 = function() { return logError(function (arg0) {
        const ret = arg0.width;
        _assertNum(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_writeBuffer_3193eaacefdcf39a = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
        arg0.writeBuffer(arg1, arg2, arg3, arg4, arg5);
    }, arguments) };
    imports.wbg.__wbg_writeTexture_cd7877c213ee5704 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        arg0.writeTexture(arg1, arg2, arg3, arg4);
    }, arguments) };
    imports.wbg.__wbg_x_25f0f55d38366f7d = function() { return logError(function (arg0) {
        const ret = arg0.x;
        return ret;
    }, arguments) };
    imports.wbg.__wbg_y_17e1b7493ec35245 = function() { return logError(function (arg0) {
        const ret = arg0.y;
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_181f13062c13bd1c = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 3927, function: Function { arguments: [Externref], shim_idx: 3928, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(arg0, arg1, wasm._ZN12wasm_bindgen7closure7destroy17haf4e1228e880db14E, _ZN12wasm_bindgen7convert8closures1_6invoke17hefa6e0dde9a250d2E);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_2241b6af4c4b2941 = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Ref(String) -> Externref`.
        const ret = getStringFromWasm0(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_34a7b9fa621bea0d = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 2947, function: Function { arguments: [], shim_idx: 2948, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(arg0, arg1, wasm._ZN12wasm_bindgen7closure7destroy17h8cd8ee85dc441550E, _ZN12wasm_bindgen7convert8closures1_6invoke17h45209938a407bc88E);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_4625c577ab2ec9ee = function() { return logError(function (arg0) {
        // Cast intrinsic for `U64 -> Externref`.
        const ret = BigInt.asUintN(64, arg0);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_5495fb6b14f5a259 = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 3494, function: Function { arguments: [], shim_idx: 3495, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(arg0, arg1, wasm._ZN12wasm_bindgen7closure7destroy17h2f53c3dbcc32bb72E, _ZN12wasm_bindgen7convert8closures1_6invoke17h3e84084fcfba997aE);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_698b2a1def90b321 = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 3234, function: Function { arguments: [NamedExternref("CloseEvent")], shim_idx: 3235, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(arg0, arg1, wasm._ZN12wasm_bindgen7closure7destroy17h7b814a43aebbe807E, _ZN12wasm_bindgen7convert8closures1_6invoke17ha1b8499d6180a081E);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_7c316abdc43840a3 = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Ref(Slice(U32)) -> NamedExternref("Uint32Array")`.
        const ret = getArrayU32FromWasm0(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_80c2750cd5d34bd1 = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 1000, function: Function { arguments: [NamedExternref("GPUUncapturedErrorEvent")], shim_idx: 1094, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(arg0, arg1, wasm._ZN12wasm_bindgen7closure7destroy17hc96c477a95a3303eE, _ZN12wasm_bindgen7convert8closures1_6invoke17h98da82563026b44fE);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_89817bb5fc2b519d = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 3238, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 3239, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(arg0, arg1, wasm._ZN12wasm_bindgen7closure7destroy17h8ee3a6a2268569a0E, _ZN12wasm_bindgen7convert8closures1_6invoke17hf06763e6d4c1560fE);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_9575fb55a66c262b = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Ref(Slice(I32)) -> NamedExternref("Int32Array")`.
        const ret = getArrayI32FromWasm0(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_9ae0607507abb057 = function() { return logError(function (arg0) {
        // Cast intrinsic for `I64 -> Externref`.
        const ret = arg0;
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_9cc6126bca283300 = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 3236, function: Function { arguments: [NamedExternref("Event")], shim_idx: 3237, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
        const ret = makeMutClosure(arg0, arg1, wasm._ZN12wasm_bindgen7closure7destroy17h4a899a72c09397b1E, _ZN12wasm_bindgen7convert8closures1_6invoke17hb2200103b4052285E);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_bbb4883c6389f1de = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Ref(Slice(U16)) -> NamedExternref("Uint16Array")`.
        const ret = getArrayU16FromWasm0(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_cb9088102bce6b30 = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
        const ret = getArrayU8FromWasm0(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_cd07b1914aa3d62c = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Ref(Slice(F32)) -> NamedExternref("Float32Array")`.
        const ret = getArrayF32FromWasm0(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_d6cd19b81560fd6e = function() { return logError(function (arg0) {
        // Cast intrinsic for `F64 -> Externref`.
        const ret = arg0;
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_e47ceb6027f5c92c = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Ref(Slice(I16)) -> NamedExternref("Int16Array")`.
        const ret = getArrayI16FromWasm0(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_e4ed1fffba13e59d = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Closure(Closure { dtor_idx: 3232, function: Function { arguments: [Ref(NamedExternref("Event"))], shim_idx: 3233, ret: Unit, inner_ret: Some(Unit) }, mutable: false }) -> Externref`.
        const ret = makeClosure(arg0, arg1, wasm._ZN12wasm_bindgen7closure7destroy17h04bfb562f99e81d1E, _ZN12wasm_bindgen7convert8closures1_1_6invoke17hdd75769ade6cb1d2E);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_cast_feefb5fadd6457fd = function() { return logError(function (arg0, arg1) {
        // Cast intrinsic for `Ref(Slice(I8)) -> NamedExternref("Int8Array")`.
        const ret = getArrayI8FromWasm0(arg0, arg1);
        return ret;
    }, arguments) };
    imports.wbg.__wbindgen_init_externref_table = function() {
        const table = wasm.__wbindgen_externrefs;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
    };
    imports['./snippets/dioxus-interpreter-js-ce7056f341163470/src/js/patch_console.js'] = __wbg_star0;

    return imports;
}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedDataViewMemory0 = null;
    cachedFloat32ArrayMemory0 = null;
    cachedInt16ArrayMemory0 = null;
    cachedInt32ArrayMemory0 = null;
    cachedInt8ArrayMemory0 = null;
    cachedUint16ArrayMemory0 = null;
    cachedUint32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;


    wasm.__wbindgen_start();
    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL('page_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync };
export default __wbg_init;

globalThis.__wasm_split_main_initSync = initSync;

// Actually perform the load
__wbg_init({module_or_path: "/./wasm/page_bg.wasm"}).then((wasm) => {
    // assign this module to be accessible globally
    globalThis.__dx_mainWasm = wasm;
    globalThis.__dx_mainInit = __wbg_init;
    globalThis.__dx_mainInitSync = initSync;
    globalThis.__dx___wbg_get_imports = __wbg_get_imports;

    if (wasm.__wbindgen_start == undefined) {
        wasm.main();
    }
});

