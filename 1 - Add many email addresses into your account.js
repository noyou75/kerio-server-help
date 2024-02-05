for(var i=0;i<200;i++){
   var s = "mybulkemail_" + i;
   document.querySelector("#userEditorEdit_k_tabMailAddresses_k_mailAddressesToolbar_k_mailAddressesButtonAdd").click();
   document.querySelector("#mailAddr_userEditorEdit_k_dialogContent_emailAddress").value=s;
   document.querySelector("#mailAddr_userEditorEdit_k_tb_k_btnOk").click();
}
