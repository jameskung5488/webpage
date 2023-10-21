<!DOCTYPE html>
<html lang="en">
<head>
  <title>PDF 摘要</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>PDF 摘要</h1>
  <form action="/summary" method="post" enctype="multipart/form-data">
    <input type="file" name="pdf">
    <input type="submit" value="上傳">
  </form>
  <div id="summary"></div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfjs-dist/2.13.110/pdf.min.js"></script>
<script>
  // 使用 PDF.js 來解析 PDF 檔案
  const pdf = await PDFJS.getDocument(event.target.querySelector("input[name='pdf']").files[0]);

  // 生成摘要
  const summary = pdf.getTextContent().slice(0, 1000);

  // 顯示摘要
  document.querySelector("#summary").innerHTML = summary;
</script>
</html>
