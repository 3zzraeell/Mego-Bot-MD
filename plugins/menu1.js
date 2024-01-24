const dir = [
    'https://telegra.ph/file/c27336861c59f66618022.mp4',
    'https://telegra.ph/file/36ef61721756142c5aa73.mp4',
    'https://telegra.ph/file/8976c46bb07c59738e001.mp4',
    'https://telegra.ph/file/65582d93dfdf228efc82c.mp4',
    'https://telegra.ph/file/9f73e4ee991e70d9b510a.mp4',
    'https://telegra.ph/file/176c961f1dcba4587f15d.mp4',
    'https://telegra.ph/file/6f37730936fa378beb60d.mp4',
    'https://telegra.ph/file/7aee7ba01fe34b43ba6f6.mp4',
];

let handler = async (m, { conn }) => {
    const name = conn.getName(m.sender);
    const videoUrl = pickRandom(dir);
    const tagUser = '@' + m.sender.split("@s.whatsapp.net")[0];
    const more = String.fromCharCode(8206);
    const teks = `${pickRandom([`*┓━ ╼━━╃⌬〔🎶〕⌬╄━━╾ ━┏*
*🎶✬⃝┇مـرحـبــا " ${name} "*
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*🎶✬⃝┇أنـا اسـمـــي "مـيــكـو"*
*🎶✬⃝┇الـمطـــور : "ᎯᎽᎯᏁᎯᏦᏫᎫᎥ"*
*🎶✬⃝┇لـاتـنـســی قـبــل كــل امــر ﹙.﹚*

*🎶✬⃝┇هــا لــك أوامـــر الـبــوت ☟*
━ ── • ⟐ • ── ━

*≼🏰≽ قـسـم الـمـجـمـوعـات╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🔧╎❯ .صلح⌉*
*⏎* *يصلح تشفير البوت لو شفر*
*📜 ╎❯ .شرح⌉*
*⏎* *يرسل شرح مفصل عن الاوامر*
*📛╎❯ .منشن⌉*
*🫥╎❯ .مخفي⌉*
*🏷️╎❯ .الجروب⌉*
*🧾╎❯ .المشرفين⌉*
*👻╎❯ .الاشباح⌉*
*🔄╎❯ .ريستر⌉*
────── • ✿⁠ • ──────
*≼🕌≽ قـسـم الـديــن╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🌅╎❯ .اذكار الصباح⌉*
*🌉╎❯ .اذكار المساء⌉*
*📖╎❯ .قران⌉*
*☪️╎❯ .حدیث⌉*
*📖╎❯ .سوره⌉*
*🕋╎❯ .ایه⌉*
────── • ✿⁠ • ──────
*≼🔃≽ قـسـم التـحـويــل╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🎴╎❯ .ملصق⌉*
*🍬╎❯ .سرقه⌉*
*♻️╎❯ .لصوره⌉*
*🎞️╎❯ .لفيديو⌉*
*📩╎❯ .تليجراف⌉*
*🐼╎❯ .لكرتون⌉*
*🏮╎❯ .لانمي⌉*
*🎙️╎❯ .انطق⌉*
*🎙️╎❯ .انطقي⌉*
*🌄╎❯ .جوده⌉*
*🔪╎❯ .مطلوب⌉*
────── • ✿⁠ • ──────
*≼📥≽ قـسـم الـتـحـمـيـل╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🎦╎❯ .تيك⌉*
*🎥╎❯ .فيديو⌉*
*📽️╎❯ .فديو⌉*
*🍥╎❯ .انستا⌉*
*🔷╎❯ .فيس⌉*
*🎶╎❯ .اغنيه⌉*
*🗳️╎❯ .تطبيق⌉*
*🖼️╎❯ .صور⌉*
*✍️╎❯ .نسخ⌉*
────── • ✿⁠ • ──────
*≼🤖≽ قـسـم الـذکــاء AI╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🧠╎❯ .ميكو⌉*
*👾╎❯ .ايانو⌉*
*🎨╎❯ .ارسم⌉*
────── • ✿⁠ • ──────
*≼🕹️≽ قـسـم الـترفـيـه ❶╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*☪️╎❯ .دين⌉*
*🔢╎❯ .رياضيات⌉*
*⚽╎❯ .رياضه⌉*
*🥅╎❯ .كره⌉*
*🖊️╎❯ .كت⌉*
*🏷️╎❯ .فكك⌉*
*🗂️╎❯ .رتب⌉*
*🗝️╎❯ .خمن⌉*
*🎭╎❯ .ايموجي⌉*
*🌎╎❯ .علم⌉*
*👁️╎❯ .عين⌉*
*✨╎❯ .احزر⌉*
*〽️╎❯ .انمي⌉*
────── • ✿⁠ • ──────
*≼🕹️≽ قـسـم الـترفـيـه ❷╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🎲╎❯ .نرد⌉*
*🧞‍♂️╎❯ .المارد⌉*
*✂️╎❯ .تحدي⌉*
*🎮╎❯ .اكس او⌉*
*🎰╎❯ .رهان⌉*
*♟️╎❯ .شطرنج⌉*
────── • ✿⁠ • ──────
*≼🕹️≽ قـسـم الـترفـيـه ❸╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*❓╎❯ .سؤال⌉*
*❗╎❯ .لو⌉*
*🌀╎❯ .تاج⌉*
*🧩╎❯ .فزوره⌉*
*✅╎❯ .صراحه⌉*
*🧩╎❯ .حروف⌉*
*📢╎❯ .مقوله⌉*
*🍃╎❯ .نصيحه⌉*
────── • ✿⁠ • ──────
*≼🕹️≽ قـسـم الـترفـيـه ❹╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🔝╎❯ .توب⌉*
*👭🏻╎❯ .صداقه⌉*
*💍╎❯ .زواج⌉*
*💔╎❯ .طلاق⌉*
*👬🏻╎❯ .رفيق⌉*
────── • ✿⁠ • ──────
*≼🏛️≽ قـسـم الـبـنــك╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*📊╎❯ .رانك⌉*
*🏦╎❯ .بنك⌉*
*💰╎❯ .شراء⌉*
*🎁╎❯ .يومي⌉*
*💱╎❯ .تحويل⌉*
*📈╎❯ .تصنيف⌉*
────── • ✿⁠ • ──────
*≼🎬≽ قـسـم الـصــور و الـأفـلـام╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*💕╎❯ .ميكي⌉*
*🖼️╎❯ .خلفيه⌉*
*🐧╎❯ .ميمز⌉*
*👩🏻‍❤️‍👨🏻╎❯ .طقم⌉*
*👱🏻‍♂️╎❯ .طقم2⌉*
*👱🏻‍♀️╎❯ .طقمي⌉*
*🐈╎❯ .قط⌉*
*📹╎❯ .ايدت⌉*
────── • ✿⁠ • ──────
*≼👥≽ قـسـم الـأعـضــاء╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*❔╎❯ .هل⌉*
*📍╎❯ .نسبه⌉*
*💞╎❯ .حب⌉*
*🖼️╎❯ .بروفايل⌉*
*👤╎❯ .شخصيه⌉*
*🔠╎❯ .زخرفه⌉*
*➕╎❯ .دمج⌉*
*💟╎❯ .تصميم⌉*
*🔍╎❯ .بحث⌉*
*💻╎❯ .المطور⌉*
*📌╎❯ .مساعده⌉*
*🚨╎❯ .الدعم⌉*
────── • ✿⁠ • ──────
*≼🖥️≽ قـسـم الـمـطــور╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*👑╎❯ .بريم⌉*
*🚫╎❯ .حظر⌉*
*⭕╎❯ .الغاء-الحظر⌉*
*🔐╎❯ .المحظورين⌉*
*🌟╎❯ .الممیزين⌉*
*⛔╎❯ .بلوك⌉*
*✅╎❯ .رفع-بلوك⌉*
*🚷╎❯ .البلوكات⌉*
*⚠️╎❯ .بان⌉*
*🔓╎❯ .رفع-بان⌉*
*👾╎❯ .تهكير⌉*
*🔛╎❯ .انضم⌉*
*🔚╎❯ .اخرج⌉*
*🚨╎❯ .مهم⌉*
*📣╎❯ .اعلان⌉*
────── • ✿⁠ • ──────

*˼‏ ⚠️˹ مـلاحــظــة╿↶*
╭ ⋅ ⋅ ── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ── ⋅ ⋅ ╮
*❶ - يمنع منعا بتا سب البوت.*
*❷ - استخدام البوت بشكل متوازن و بدون تسبب ازعاج للاعضاء.*
 ╰⋅ ⋅ ── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ── ⋅ ⋅ ╯


*~.¸¸ ❝ 𝕸𝖎𝖐𝖚 𝕭𝖔𝖙 ❝ ¸¸.~*`])}`.trim();

    conn.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: teks,
        gifPlayback: true,
        gifAttribution: 0
    }, { quoted: m });
};

handler.command = ['اوامر'،'menu'];

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }