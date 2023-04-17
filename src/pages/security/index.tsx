import React from "react";

const Security = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n            html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}html{line-height:1}ol,ul{list-style:none}table{border-collapse:collapse;border-spacing:0}caption,th,td{text-align:left;font-weight:normal;vertical-align:middle}q,blockquote{quotes:none}q:before,q:after,blockquote:before,blockquote:after{content:"";content:none}a img{border:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}html{font-size:87.5%;line-height:1.57143em}html{font-size:14px;line-height:1.6em;-webkit-text-size-adjust:100%}body{background:#f7f7f7;color:#545454;text-rendering:optimizeLegibility;font-family:"AvenirNext-Regular"}a{color:#de4c4f;text-decoration:none}h1{font-family:"AvenirNext-Medium";color:#333;font-size:1.8em;line-height:1.3em;margin-bottom:.78571em}h2{font-family:"AvenirNext-Medium";color:#333;font-size:1.3em;line-height:1em;margin-bottom:.62857em}h3{font-family:"AvenirNext-Medium";color:#e06e73;font-size:1.5em;line-height:1em; margin:50px 0 20px;}p{margin:1em 0;hyphens:auto}hr{height:1px;border:0;background-color:#dedede;margin:-1px auto 1.57143em auto}ul,ol{margin:15px 0}ul ul,ul ol,ol ul,ol ol{margin-bottom:0px}li p{margin-left: 20px; margin-top: 5px;}ol li:before{content:counter(ol) "."; font-weight:bold; counter-increment:ol;color:#e06e73;display:inline-block;min-width:1em;margin-right:0.5em}b,strong{font-family:"AvenirNext-Bold"}i,em{font-family:"AvenirNext-Italic"}code{font-family:"Menlo-Regular"}.text-overflow-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sf_code_string,.sf_code_selector,.sf_code_attr-name,.sf_code_char,.sf_code_builtin,.sf_code_inserted{color:#D33905}.sf_code_comment,.sf_code_prolog,.sf_code_doctype,.sf_code_cdata{color:#838383}.sf_code_number,.sf_code_boolean{color:#0E73A2}.sf_code_keyword,.sf_code_atrule,.sf_code_rule,.sf_code_attr-value,.sf_code_function,.sf_code_class-name,.sf_code_class,.sf_code_regex,.sf_code_important,.sf_code_variable,.sf_code_interpolation{color:#0E73A2}.sf_code_property,.sf_code_tag,.sf_code_constant,.sf_code_symbol,.sf_code_deleted{color:#1B00CE}.sf_code_macro,.sf_code_entity,.sf_code_operator,.sf_code_url{color:#920448}.note-wrapper{box-shadow:5px 5px 0 rgba(0,0,0,0.05);border:1px solid #e07378;max-width:800px;margin:5% auto;padding:5%; width: 90%; background: #FFF; line-height: 1.5;}.note-wrapper.spotlight-preview{overflow-x:hidden}u{text-decoration:none;background-image:linear-gradient(to bottom, rgba(0,0,0,0) 50%,#e06e73 50%);background-repeat:repeat-x;background-size:2px 2px;background-position:0 1.05em}s{color:#878787}hr{margin-bottom:0.7em;margin-top:0.7em}ul li{text-indent:0;margin:  0 0;}ul li:before{content:"•";color:#e06e73;display:inline-block;margin-right:1em}ul ul{margin-left:1.25714em}ol li{text-indent:0; margin:10px 0 0;}ol ol{margin-left:1.25714em}blockquote{display:block;margin-left:-1em;padding-left:0.8em;border-left:0.2em solid #e06e73}.todo-list ul{margin-left:1.88571em}.todo-list li{text-indent:-1.75em}.todo-list li:before{content:"";display:static;margin-right:0px}.todo-checkbox{text-indent:-1.7em}.todo-checkbox svg{margin-right:0.3em;position:relative;top:0.2em}.todo-checkbox svg #check{display:none}.todo-checkbox.todo-checked #check{display:inline}.todo-checkbox.todo-checked .todo-text{text-decoration:line-through;color:#878787}.code-inline{display:inline;background:white;border:solid 1px #dedede;padding:0.2em 0.5em;font-size:0.9em}.code-multiline{display:block;background:white;border:solid 1px #dedede;padding:0.7em 1em;font-size:0.9em;overflow-x:auto}.hashtag{display:inline-block;color:white;background:#b8bfc2;padding:0.0em 0.5em;border-radius:1em;text-indent:0}.hashtag a{color:#fff}.address a{color:#545454;background-image:linear-gradient(to bottom, rgba(0,0,0,0) 50%,#0da35e 50%);background-repeat:repeat-x;background-size:2px 2px;background-position:0 1.05em}.address svg{position:relative;top:0.2em;display:inline-block;margin-right:0.2em}.color-preview{display:inline-block;width:1em;height:1em;border:solid 1px rgba(0,0,0,0.3);border-radius:50%;margin-right:0.1em;position:relative;top:0.2em;white-space:nowrap}.color-code{margin-right:0.2em;font-family:"Menlo-Regular";font-size:0.9em}.color-hash{opacity:0.4}.ordered-list-number{color:#e06e73;text-align:right;display:inline-block;min-width:1em}.arrow svg{position:relative;top:0.08em;display:inline-block;margin-right:0.15em;margin-left:0.15em}.arrow svg #rod{stroke:#545454}.arrow svg #point{fill:#545454}mark{color:inherit;display:inline;padding:0.2em 0.5em;background-color:#fcffc0}img{max-width:100%;height:auto}\n\n        ',
        }}
      />
      <div className="note-wrapper">
        <h1>
          CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN <br /> DỊCH VỤ MẠNG XÃ HỘI ZING
          MP3
        </h1>
        <p style={{ fontStyle: "italic" }}>(Cập nhật tháng 03/2020)</p>
        <h3>1. Mục đích thu thập thông tin cá nhân</h3>
        <p>
          Các thông tin cần cung cấp bao gồm Tên, điện thoại hợp lệ do bạn sở
          hữu để định danh tài khoản của người sử dụng và cung cấp các dịch vụ
          hướng đối tượng.
        </p>
        <h3>2. Phạm vi sử dụng thông tin</h3>
        <p>
          Thông tin được sử dụng cho mục đích chăm sóc khách hàng, khảo sát về
          các sản phẩm và dịch vụ của VNG, phát triển các dịch vụ mới và cải
          thiện các dịch vụ hiện có đáp ứng mong muốn và sở thích của Người Sử
          Dụng
        </p>
        <p>
          Zing MP3 có thể sử dụng Dữ liệu để tùy biến và cải tiến nhằm phục vụ
          bạn tốt hơn. Chúng tôi không sử dụng thông tin của bạn vào mục đích
          bất hợp pháp. Zing MP3 được quyền cung cấp thông tin của bạn cho bên
          thứ 3 trong các trường hợp nhưng không giới hạn:
        </p>
        <ul>
          <li>Zing MP3 được bạn chấp thuận</li>
          <li>
            Dịch vụ Zing MP3 cung cấp yêu cầu sự tương tác với một bên thứ ba
            hoặc do bên thứ ba cung cấp;
          </li>
          <li>Theo các quy định hành pháp hoặc luật pháp;</li>
          <li>
            Trong trường hợp Người Sử Dụng sử dụng website liên kết trên website
            của mạng xã hội này để truy cập, đề nghị Người Sử Dụng đọc kỹ thỏa
            thuận sử dụng và chính sách bảo vệ sự riêng tư trên các website đó.
          </li>
        </ul>
        <p>
          Trong quá trình sử dụng Zing MP3, Người Sử Dụng đồng ý nhận tất cả
          thông báo từ VNG liên quan tới sản phẩm và dịch vụ qua thư điện tử,
          thư bưu chính hoặc điện thoại của Người Sử Dụng
        </p>
        <h3>3. Thời gian lưu trữ thông tin</h3>
        <p>
          Thông tin cá nhân sẽ được lưu trữ cho tới khi bị hủy bỏ bởi chính
          Người Sử Dụng, ngoại trừ thông tin định danh sẽ được lưu trữ trong
          thời hạn 02 năm theo quy định của Bộ Thông Tin và Truyền Thông.
        </p>
        <h3>4. Quyền tiếp cận thông tin</h3>
        <p>
          Mọi thông tin cá nhân của Người Sử Dụng sẽ được chúng tôi nỗ lực cao
          để bảo mật, không tiết lộ ra ngoài. VNG không bán hay trao đổi những
          thông tin này với bất kỳ một bên thứ ba nào khác trừ trường hợp được
          quy định trong Chính sách này hoặc các thỏa thuận khác giữa Người Sử
          Dụng và VNG.
        </p>
        <h3>5. Đơn vị thu thập và quản lý thông tin</h3>
        <p>
          <strong>Bộ phận Zing MP3</strong>
          <br /> Z06, Đường số 13, Phường Tân Thuận Đông, Quận 7, Thành phố Hồ
          Chí Minh, Việt Nam
          <br /> E-mail: copyright@mp3.zing.vn
        </p>
        <h3>6. Phương thức để người sử dụng chỉnh sửa thông tin</h3>
        <p>
          Bằng cách đăng nhập vào tải khoản của mình, Người Sử Dụng có thể truy
          cập và sửa đổi thông tin mà Người Sử Dụng cung cấp trong quá trình sử
          dụng Zing MP3.
        </p>
        <p>
          Nếu Người Sử Dụng không đồng ý việc tiếp tục để Zing MP3 thu thập và
          sử dụng thông tin cá nhân của Người Sử Dụng vì bất kỳ lí do nào, Người
          Sử Dụng có thể yêu cầu Zing MP3 xóa thông tin này bằng cách gửi yêu
          cầu thông qua biểu mẫu liên hệ tại website{" "}
          <a href="https://mp3.zing.vn/huong-dan/contact" target="_blank">
            https://mp3.zing.vn/huong-dan/contact
          </a>{" "}
          (chọn mục Vấn đề khác). Liên kết đến biểu mẫu này cũng được thể hiện
          trực tiếp trên ứng dụng trong phần Cài đặt
        </p>
        <p>
          Người Sử Dụng lưu ý rằng Zing MP3 sẽ xác thực danh tính của Người Sử
          Dụng trong quá trình xử lý yêu cầu xoá thông tin nhằm mục đích bảo vệ
          tài khoản của Người Sử Dụng.
        </p>
        <h3>7. Luật áp dụng và giải quyết tranh chấp</h3>
        <p>
          Chính sách bảo mật này được điều chỉnh và giải thích bởi pháp luật
          Việt Nam. Mọi tranh chấp phát sinh giữa VNG và Người Sử Dụng liên quan
          tới việc thực thi Chính sách này sẽ được giải quyết trước hết bằng hòa
          giải, thương lượng. Trong vòng 30 ngày kể từ thời điểm phát sinh tranh
          chấp, nếu không thỏa thuận được thì tranh chấp sẽ được giải quyết bằng
          trọng tài tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) theo Quy tắc
          tố tụng trọng tài của Trung tâm này và các điều kiện sau:
        </p>
        <ul>
          <li>
            Giải quyết theo thủ tục rút gọn nếu khả dụng tại thời điểm giải
            quyết tranh chấp;
          </li>
          <li>Số lượng trọng tài viên là 01 do VIAC chỉ định;</li>
          <li>Địa điểm trọng tài là TP. Hồ Chí Minh;</li>
          <li>Ngôn ngữ trọng tài là tiếng Việt</li>
        </ul>
        <h3>8. Sửa đổi Chính sách</h3>
        <p>
          Các điều khoản quy định tại Chính sách bảo mật này được công bố trên
          website và có thể được cập nhật, chỉnh sửa bất cứ lúc nào mà không cần
          phải thông báo trước tới Người Sử Dụng. VNG sẽ công bố rõ trên
          Website, diễn đàn về những thay đổi, bổ sung đó.
        </p>
        <p>
          Trong trường hợp một hoặc một số điều khoản Chính sách bảo mật này
          xung đột với các quy định của luật pháp Việt Nam, điều khoản đó sẽ
          được chỉnh sửa cho phù hợp với quy định pháp luật hiện hành, phần còn
          lại của Chính sách vẫn giữ nguyên giá trị.
        </p>
      </div>
    </>
  );
};

export default Security;
