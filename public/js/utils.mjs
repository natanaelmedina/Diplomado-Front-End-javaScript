const byId      = document.getElementById.bind(document),
      byTag     = document.getElementsByTagName.bind(document),
      byClass   = document.getElementsByClassName.bind(document),
      byName    = document.getElementsByName.bind(document),
      TagNameNS = document.getElementsByTagNameNS.bind(document),
      _$        =document.querySelectorAll.bind(document);

export  { byId, byTag, byClass, byName, TagNameNS,_$}   

$('#GetFile').on('click', function () {
    $.ajax({
        url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.pdf';
            a.click();
            window.URL.revokeObjectURL(url);
        }
    });
});
    