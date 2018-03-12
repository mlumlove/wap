// JavaScript Document
//图片上传预览    IE是用了滤镜。
function previewImage(file)
{
  var div = document.getElementById('preview');
  if (file.files && file.files[0])
  {
	  div.innerHTML ="<a class='s_circle'><img id=imghead></a>";
	  var img = document.getElementById('imghead');
	  var reader = new FileReader();
	  reader.onload = function(evt){img.src = evt.target.result;}
	  reader.readAsDataURL(file.files[0]);
  }
  else //兼容IE
  {
	var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
	file.select();
	var src = document.selection.createRange().text;
	div.innerHTML = '<img id=imghead>';
	var img = document.getElementById('imghead');
	img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
	div.innerHTML = "<div id='divhead'"+sFilter+src+"\"></div>";
  }
}