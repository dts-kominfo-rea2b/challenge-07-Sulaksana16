const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (mood) => {
  try {
    let ixx = await promiseTheaterIXX();
    let vgc = await promiseTheaterVGC();
    let merge = ixx.concat(vgc).filter((value) => value.hasil === mood);
    return merge.length;
  } catch (err) {
    return err;
  }
}

module.exports = {
  promiseOutput,
};
