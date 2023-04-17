import React from "react";

const Privacy = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\nhtml {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ncaption,\nth,\ntd {\n  text-align: left;\n  font-weight: normal;\n  vertical-align: middle;\n}\nq,\nblockquote {\n  quotes: none;\n}\nq:before,\nq:after,\nblockquote:before,\nblockquote:after {\n  content: "";\n  content: none;\n}\na img {\n  border: none;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n* {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 87.5%;\n  line-height: 1.57143em;\n}\nhtml {\n  font-size: 14px;\n  line-height: 1.6em;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  background: #f7f7f7;\n  color: #545454;\n  text-rendering: optimizeLegibility;\n  font-family: "AvenirNext-Regular";\n}\na {\n  color: #de4c4f;\n  text-decoration: none;\n}\nh1 {\n  font-family: "AvenirNext-Medium";\n  color: #333;\n  font-size: 1.8em;\n  line-height: 1.3em;\n  margin-bottom: 0.78571em;\n}\nh2 {\n  font-family: "AvenirNext-Medium";\n  color: #333;\n  font-size: 1.3em;\n  line-height: 1em;\n  margin-bottom: 0.62857em;\n}\nh3 {\n  font-family: "AvenirNext-Medium";\n  color: #e06e73;\n  font-size: 1.5em;\n  line-height: 1em;\n  margin: 50px 0 20px;\n}\np {\n  margin-bottom: 1.57143em;\n  hyphens: auto;\n}\nhr {\n  height: 1px;\n  border: 0;\n  background-color: #dedede;\n  margin: -1px auto 1.57143em auto;\n}\nul,\nol {\n  margin-bottom: 0.31429em;\n}\nul ul,\nul ol,\nol ul,\nol ol {\n  margin-bottom: 0px;\n}\nli p {\n  margin-left: 20px;\n  margin-top: 5px;\n}\nol li:before {\n  content: counter(ol) ".";\n  font-weight: bold;\n  counter-increment: ol;\n  color: #e06e73;\n  display: inline-block;\n  min-width: 1em;\n  margin-right: 0.5em;\n}\nb,\nstrong {\n  font-family: "AvenirNext-Bold";\n}\ni,\nem {\n  font-family: "AvenirNext-Italic";\n}\ncode {\n  font-family: "Menlo-Regular";\n}\n.text-overflow-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sf_code_string,\n.sf_code_selector,\n.sf_code_attr-name,\n.sf_code_char,\n.sf_code_builtin,\n.sf_code_inserted {\n  color: #d33905;\n}\n.sf_code_comment,\n.sf_code_prolog,\n.sf_code_doctype,\n.sf_code_cdata {\n  color: #838383;\n}\n.sf_code_number,\n.sf_code_boolean {\n  color: #0e73a2;\n}\n.sf_code_keyword,\n.sf_code_atrule,\n.sf_code_rule,\n.sf_code_attr-value,\n.sf_code_function,\n.sf_code_class-name,\n.sf_code_class,\n.sf_code_regex,\n.sf_code_important,\n.sf_code_variable,\n.sf_code_interpolation {\n  color: #0e73a2;\n}\n.sf_code_property,\n.sf_code_tag,\n.sf_code_constant,\n.sf_code_symbol,\n.sf_code_deleted {\n  color: #1b00ce;\n}\n.sf_code_macro,\n.sf_code_entity,\n.sf_code_operator,\n.sf_code_url {\n  color: #920448;\n}\n.note-wrapper {\n  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid #e07378;\n  max-width: 800px;\n  margin: 5% auto;\n  padding: 5%;\n  width: 90%;\n  background: #fff;\n}\n.note-wrapper.spotlight-preview {\n  overflow-x: hidden;\n}\nu {\n  text-decoration: none;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0) 50%,\n    #e06e73 50%\n  );\n  background-repeat: repeat-x;\n  background-size: 2px 2px;\n  background-position: 0 1.05em;\n}\ns {\n  color: #878787;\n}\np {\n  margin-bottom: 0.1em;\n}\nhr {\n  margin-bottom: 0.7em;\n  margin-top: 0.7em;\n}\nul li {\n  text-indent: 0;\n  margin: 10px 0 0;\n}\nul li:before {\n  content: "•";\n  color: #e06e73;\n  display: inline-block;\n  margin-right: 1em;\n}\nul ul {\n  margin-left: 1.25714em;\n}\nol li {\n  text-indent: 0;\n  margin: 10px 0 0;\n}\nol ol {\n  margin-left: 1.25714em;\n}\nblockquote {\n  display: block;\n  margin-left: -1em;\n  padding-left: 0.8em;\n  border-left: 0.2em solid #e06e73;\n}\n.todo-list ul {\n  margin-left: 1.88571em;\n}\n.todo-list li {\n  text-indent: -1.75em;\n}\n.todo-list li:before {\n  content: "";\n  display: static;\n  margin-right: 0px;\n}\n.todo-checkbox {\n  text-indent: -1.7em;\n}\n.todo-checkbox svg {\n  margin-right: 0.3em;\n  position: relative;\n  top: 0.2em;\n}\n.todo-checkbox svg #check {\n  display: none;\n}\n.todo-checkbox.todo-checked #check {\n  display: inline;\n}\n.todo-checkbox.todo-checked .todo-text {\n  text-decoration: line-through;\n  color: #878787;\n}\n.code-inline {\n  display: inline;\n  background: white;\n  border: solid 1px #dedede;\n  padding: 0.2em 0.5em;\n  font-size: 0.9em;\n}\n.code-multiline {\n  display: block;\n  background: white;\n  border: solid 1px #dedede;\n  padding: 0.7em 1em;\n  font-size: 0.9em;\n  overflow-x: auto;\n}\n.hashtag {\n  display: inline-block;\n  color: white;\n  background: #b8bfc2;\n  padding: 0em 0.5em;\n  border-radius: 1em;\n  text-indent: 0;\n}\n.hashtag a {\n  color: #fff;\n}\n.address a {\n  color: #545454;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0) 50%,\n    #0da35e 50%\n  );\n  background-repeat: repeat-x;\n  background-size: 2px 2px;\n  background-position: 0 1.05em;\n}\n.address svg {\n  position: relative;\n  top: 0.2em;\n  display: inline-block;\n  margin-right: 0.2em;\n}\n.color-preview {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  border: solid 1px rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n  margin-right: 0.1em;\n  position: relative;\n  top: 0.2em;\n  white-space: nowrap;\n}\n.color-code {\n  margin-right: 0.2em;\n  font-family: "Menlo-Regular";\n  font-size: 0.9em;\n}\n.color-hash {\n  opacity: 0.4;\n}\n.ordered-list-number {\n  color: #e06e73;\n  text-align: right;\n  display: inline-block;\n  min-width: 1em;\n}\n.arrow svg {\n  position: relative;\n  top: 0.08em;\n  display: inline-block;\n  margin-right: 0.15em;\n  margin-left: 0.15em;\n}\n.arrow svg #rod {\n  stroke: #545454;\n}\n.arrow svg #point {\n  fill: #545454;\n}\nmark {\n  color: inherit;\n  display: inline;\n  padding: 0.2em 0.5em;\n  background-color: #fcffc0;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n',
        }}
      />

      <div className="note-wrapper">
        <h1>THỎA THUẬN CUNG CẤP VÀ SỬ DỤNG DỊCH VỤ MẠNG XÃ HỘI ZING MP3</h1>
        <p style={{ fontStyle: "italic" }}>(Cập nhật tháng 03/2020)</p>
        <h3>Điều 1: Giải thích từ ngữ</h3>
        <ul>
          <li>
            Zing MP3: là dịch vụ mạng xã hội do Công Ty Cổ Phần VNG là chủ quản
            có thể truy cập qua website zingmp3.vn, ứng dụng Zing Mp3 hoặc bất
            kỳ cách truy cập khả dụng nào khác.
          </li>
          <li>
            Thỏa Thuận: là thỏa thuận cung cấp và sử dụng dịch vụ mạng xã hội
            Zing MP3, cùng với tất cả các bản sửa đổi, bổ sung, cập nhật.
          </li>
          <li>VNG: là Công Ty Cổ Phần VNG.</li>
          <li>
            Thông Tin Cá Nhân: là thông tin gắn liền với việc xác định danh
            tính, nhân thân của cá nhân bao gồm tên, tuổi, địa chỉ, số chứng
            minh nhân dân, số điện thoại, địa chỉ thư điện tử, tài khoản ngân
            hàng của Người Sử Dụng và một số thông tin khác theo quy định của
            pháp luật.
          </li>
          <li>
            Zalo ID: là tài khoản để Người Sử Dụng đăng nhập, upload nội dung
            lên Zing MP3 và sử dụng các tính năng nâng cao khác.
          </li>
          <li>
            Người Sử Dụng: là bên truy cập Zing Mp3 không phụ thuộc có hay không
            có Zalo ID.
          </li>
          <li>
            Sở Hữu Trí Tuệ: là những sáng chế, cải tiến, thiết kế, quy trình,
            công thức, phương pháp, cơ sở dữ liệu, thông tin, bản vẽ, mã, chương
            trình máy tính, tác phẩm có bản quyền (hiện tại và tương lai), thiết
            kế mạch tích hợp bán dẫn, thương hiệu, nhãn hiệu (dù đã đăng ký hay
            chưa đăng ký) tên thương mại và (thiết kế) bao bì thương phẩm.
          </li>
        </ul>
        <h3>Điều 2: Nội dung dịch vụ</h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            Zing MP3 là mạng xã hội chia sẻ thông tin về âm nhạc, cho phép nghe
            nhạc trực tuyến, xem video clip, music video (MV) bao gồm nhiều thể
            loại khác nhau và/hoặc những nội dung khác được Người Sử Dụng đăng
            tải.
          </li>
          <li>
            Thông qua Zing MP3, chủ thể bản quyền có thể để đăng tải bài hát /
            video clip, MV chất lượng để truyền đạt tới Người Sử Dụng.
          </li>
          <li>
            Người Sử Dụng có thể nghe trực tuyến hoặc tải về từ website hoặc từ
            ứng dụng MP3 được phát triển trên nền tảng di động.
          </li>
          <li>
            Zing MP3 cho phép Người Sử Dụng trao đổi, thảo luận và phản hồi
            thông qua công cụ chat bằng kí tự chữ về những nội dung được cung
            cấp trên Zing MP3.
          </li>
          <li>
            Người Sử Dụng Zing MP3 có thể sử dụng dịch vụ trên Website hoặc/và
            các ứng dụng Zing MP3 phát triển trên thiết bị di động.
          </li>
          <li>
            Thông qua Zing MP3, VNG cung cấp dịch vụ quảng cáo trên Wesite
            và/hoặc trên ứng dụng Zing MP3 phát triển trên thiết bị di động.
          </li>
        </ol>
        <h3>Điều 3: Chấp nhận điều khoản sử dụng và sửa đổi</h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            Khi sử dụng Dịch vụ Zing MP3, Người Sử Dụng mặc định phải đồng ý và
            tuân theo các điều khoản được quy định tại Thỏa Thuận này và quy
            định, quy chế mà Zing MP3 liên kết, tích hợp (nêu có) bao gồm nhưng
            không giới hạn Zalo ID tại
            <a href="http://zaloapp.com/zalo/dieukhoan/">
              http://zaloapp.com/zalo/dieukhoan/
            </a>
          </li>
          <li>
            Khi truy cập, sử dụng Zing MP3 bằng bất cứ phương tiện (máy tính,
            điện thoại, tivi thiết bị kết nối internet) hoặc sử dụng ứng dụng
            Zing MP3 mà VNG phát triển thì Người Sử Dụng cũng phải tuân theo Quy
            chế này.
          </li>
          <li>
            Để đáp ứng nhu cầu sử dụng của Người Sử Dụng, Zing MP3 không ngừng
            hoàn thiện và phát triển, vì vậy các điều khoản quy định tại Thỏa
            thuận cung cấp và sử dụng dịch vụ mạng xã hội Zing MP3 này, Quy chế
            Zalo ID có thể được cập nhật, chỉnh sửa bất cứ lúc nào mà không cần
            phải thông báo trước tới Người Sử Dụng. Zing MP3 sẽ công bố rõ trên
            Website, diễn đàn về những thay đổi, bổ sung đó.
          </li>
          <li>
            Trong trường hợp một hoặc một số điều khoản Quy chế này xung đột với
            các quy định của luật pháp, điều khoản đó sẽ được chỉnh sửa cho phù
            hợp với quy định pháp luật hiện hành, và phần còn lại của Quy chế sử
            dụng vẫn giữ nguyên giá trị.
          </li>
        </ol>
        <h3>Điều 4: Đăng ký tài khoản và sử dụng dịch vụ</h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            Người Sử Dụng phải đủ năng lực hành vi dân sự và đủ 13 tuổi trở lên
            mới được phép đăng ký Zalo ID và/hoặc sử dụng Zing MP3.
          </li>
          <li>
            Khách hàng sử dụng tài khoản Zalo ID để truy cập Zing MP3. Khách
            hàng cũng có thể đăng nhập Zing MP3 từ tài khoản liên kết mà Zing
            MP3 cho phép.
          </li>
          <li>
            Một số tính năng của Zing MP3 yêu cầu Người Sử Dụng phải đăng ký,
            đăng nhập để sử dụng. Nếu Người Sử Dụng không đăng ký, đăng nhập thì
            chỉ sử dụng Zing MP3 với các tính năng thông thường. Chúng tôi
            khuyến khích Người Sử Dụng đăng ký tài khoản để sử dụng Zing MP3
            được tốt nhất.
          </li>
          <li>
            Trên Website/ứng dụng Zing MP3 xuất hiện link website, hoặc biểu
            tượng website khác, bạn không nên suy luận rằng Zing MP3 hoạt động,
            kiểm soát hoặc sở hữu với những website này. Việc truy cập tới các
            trang này khác hoàn toàn có thể gặp rủi ro, nguy hiểm. Người Sử Dụng
            hoàn toàn chịu trách nhiệm rủi ro khi sử dụng website liên kết này.
            Zing MP3 không chịu trách nhiệm về nội dung của bất kì website hoặc
            điểm đến nào ngoài trang Zing MP3.
          </li>
          <li>
            Zing MP3 cho phép Người Sử Dụng cung cấp, chia sẻ video, clip thuộc
            các thể loại mà Zing MP3 định hướng. Zing MP3 sẽ thẩm tra sơ bộ về
            kỹ thuật và nội dung video, và như vậy video, nội dung cung cấp của
            Người Sử Dụng có thể không được đăng tải lên ngay lập tức.
          </li>
          <li>
            Bài viết đánh giá ý kiến của bạn là một phần Dịch vụ Zing MP3. Người
            Sử Dụng có thể xuất bản, truyền tải, gửi đi những đánh giá, ý kiến,
            hoặc những tài liệu khác lên Zing MP3. Người Sử Dụng phải đảm bảo
            bài viết, đánh giá của mình phù hợp với giới hạn ngôn từ và nội
            dung.
          </li>
        </ol>
        <h3>Điều 5. Các nội dung cấm trao đổi và chia sẻ trên mạng xã hội</h3>
        <p>
          Khi sử dụng sản phẩm Zing MP3, nghiêm cấm khách hàng một số hành vi
          bao gồm nhưng không giới hạn sau:
        </p>
        <br />
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            Lợi dụng việc cung cấp, trao đổi, sử dụng thông tin trên Zing MP3
            nhằm mục đích: <br />
            a. Chống lại Nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam; gây phương
            hại đến an ninh quốc gia, trật tự, an toàn xã hội; phá hoại khối đại
            đoàn kết toàn dân; tuyên truyền chiến tranh xâm lược, khủng bố; gây
            hận thù, mâu thuẫn giữa các dân tộc, sắc tộc, chủng tộc, tôn giáo;{" "}
            <br />
            b. Tuyên truyền, kích động bạo lực, dâm ô, đồi trụy, tội ác, tệ nạn
            xã hội, mê tín dị đoan, phá hoại thuần phong, mỹ tục của dân tộc.{" "}
            <br />
            c. Tuyệt đối không bàn luận, đăng tải các nội dung về các vấn đề
            chính trị.
          </li>
          <li>
            Người Sử Dụng lợi dụng việc sử dụng Zing MP3 nhằm tiết lộ bí mật nhà
            nước, bí mật quân sự, an ninh, kinh tế, đối ngoại và những bí mật
            khác do pháp luật quy định bằng bất cứ hình thức nào trên Zing MP3.
          </li>
          <li>
            Quảng cáo, tuyên truyền, mua bán hàng hoá, dịch vụ bị cấm hoặc
            truyền bá tác phẩm báo chí, văn học, nghệ thuật, xuất bản phẩm bị
            cấm trên Zing MP3.
          </li>
          <li>
            Khi giao tiếp với người dùng khác, Người Sử Dụng quấy rối, chửi bới,
            làm phiền hay có bất kỳ hành vi thiếu văn hoá.
          </li>
          <li>
            Người Sử Dụng có quyền sử dụng đối với hình ảnh của mình. Khi sử
            dụng hình ảnh của cá nhân khác, Người Sử Dụng phải được sự đồng ý
            của cá nhân đó. Nghiêm cấm việc sử dụng hình ảnh của người khác mà
            xâm phạm danh dự, nhân phẩm, uy tín của người có hình ảnh.
          </li>
          <li>
            Lợi dụng mạng xã hội Zing MP3 để thu thập thông tin của Người Sử
            Dụng, công bố thông tin, tư liệu về đời tư của Người Sử Dụng khác.
          </li>
          <li>
            Đặt tài khoản theo tên của danh nhân, tên các vị lãnh đạo của Đảng
            và Nhà nước, tên của cá nhân, tổ chức tội phạm, phản động, khủng bố
            hoặc tài khoản có ý nghĩa không lành mạnh, trái với thuần phong mỹ
            tục.
          </li>
          <li>
            Đưa thông tin xuyên tạc, vu khống, nhạo báng, xúc phạm uy tín tới tổ
            chức, cá nhân dưới bất kỳ hình thức nào (nhạo báng, chê bai, kỳ thị
            tôn giáo, giới tính, sắc tộc….).
          </li>
          <li>
            Hành vi, thái độ làm tổn hại đến uy tín Zing MP3 hoặc VNG dưới bất
            kỳ hình thức hoặc phương thức nào.
          </li>
          <li>
            Nghiêm cấm quảng bá bất kỳ sản phẩm dưới bất kỳ hình thức nào, bao
            gồm nhưng không giới hạn việc gửi, truyền bất kỳ thông điệp nào mang
            tính quảng cáo, mời gọi, thư dây truyền, cơ hội đầu tư trên Zing MP3
            mà không có sự đồng ý bằng văn bản của VNG.
          </li>
          <li>
            Lợi dụng Zing MP3 để tổ chức các hình thức cá cược, cờ bạc hoặc các
            thỏa thuận liên quan đến tiền, hiện kim, hiện vật.
          </li>
          <li>
            Cản trở trái pháp luật, gây rối, phá hoại hệ thống máy chủ; Cản trở
            việc truy cập thông tin và sử dụng các dịch vụ hợp pháp trên Zing
            MP3.
          </li>
          <li>
            Sử dụng trái phép mật khẩu, khoá mật mã của các tổ chức, cá nhân,
            thông tin riêng, thông tin cá nhân và tài nguyên Internet.
          </li>
          <li>
            Trực tiếp hoặc gián tiếp sử dụng bất kỳ thiết bị, phần mềm, trang
            web internet, dịch vụ dựa trên web, hoặc các phương tiện khác để gỡ
            bỏ, thay đổi, bỏ qua, lẩn tránh, cản trở, hoặc phá hoại bất kỳ bản
            quyền, thương hiệu, hoặc các dấu hiệu về quyền sở hữu khác được đánh
            dấu trên Nội dung (như logo) hoặc bất kỳ hệ thống kiểm soát dữ liệu,
            thiết bị, biện pháp bảo vệ nội dung khác cũng như các biện pháp hạn
            chế truy cập từ các vùng địa lý khác nhau.
          </li>
          <li>
            Trực tiếp hoặc gián tiếp thông qua bất kỳ thiết bị, phần mềm, trang
            web internet, dịch vụ dựa trên web, hoặc các phương tiện khác để sao
            chép, tải về, chụp lại, sản xuất lại, nhân bản, lưu trữ, phân phối,
            tải lên, xuất bản, sửa đổi, dịch thuật, phát sóng, trình chiếu, hiển
            thị, bán, truyền tải hoặc truyền lại nội dung trừ khi được sự cho
            phép của Zing MP3 bằng văn bản.
          </li>
          <li>
            Tạo ra, tái tạo, phân phối hay quảng cáo một chi tiết của bất kỳ nội
            dung trừ khi được phép của Zing MP3. Bạn không được phép xây dựng mô
            hình kinh doanh sử dụng các Nội dung cho dù là có hoặc không vì lợi
            nhuận. Nội dung được đề cập tại Zing MP3 bao gồm nhưng không giới
            hạn bất kỳ văn bản, đồ họa, hình ảnh, bố trí, giao diện, biểu tượng,
            hình ảnh, tài liệu âm thanh và video, và ảnh tĩnh. Ngoài ra, chúng
            tôi nghiêm cấm việc tạo ra các sản phẩm phát sinh hoặc vật liệu có
            nguồn gốc từ hoặc dựa trên bất kì nội dung nào bao gồm dựng phim,
            làm video tương tự, hình nền, chủ đề máy tính, thiệp chúc mừng, và
            hàng hóa, trừ khi nó được sự cho phép của Zing MP3 bằng văn bản.
          </li>
          <li>
            Giả mạo tổ chức, cá nhân và phát tán thông tin giả mạo, thông tin
            sai sự thật trên Zing MP3 xâm hại đến quyền và lợi ích hợp pháp của
            tổ chức, cá nhân.
          </li>
          <li>
            Tạo đường dẫn trái tới tên miền hợp pháp của tổ chức, cá nhân. Tạo,
            cài đặt, phát tán các phần mềm độc hại, vi rút máy tính; xâm nhập
            trái phép, chiếm quyền điều khiển hệ thống thông tin, tạo lập công
            cụ tấn công trên Internet.
          </li>
          <li>
            Tuyệt đối không sử dụng bất kỳ chương trình, công cụ hay hình thức
            nào khác để can thiệp vào Zing MP3
          </li>
          <li>
            Nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt động
            nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu của sản phẩm
            cung cấp hoặc hệ thống máy chủ Zing MP3.
          </li>
          <li>
            Không được có bất kỳ hành vi nào nhằm đăng nhập trái phép hoặc tìm
            cách đăng nhập trái phép hoặc gây thiệt hại cho hệ thống máy chủ
            Zing MP3
          </li>
          <li>
            Nghiêm cấm mọi hành vi xâm phạm khác dưới mọi hình thức tới sản
            phẩm, tài sản và uy tín của VNG.
          </li>
        </ol>
        <h3>Điều 6. Nội dung cung cấp trao đổi thông tin</h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            Khi đăng kí sử dụng dịch vụ Zing MP3, Người Sử Dụng có thể upload
            nội dung lên Zing MP3. Nội dụng upload lên Zing MP3 phải phù hợp với
            thể loại, tiêu chuẩn mà Zing MP3 cho phép.
          </li>
          <li>
            Người Sử Dụng phải chịu trách nhiệm về nội dung của việc đăng tải
            trên Dịch vụ Zing MP3. Người Sử Dụng khẳng định và đảm bảo rằng mình
            sở hữu hoặc/và được sự đồng ý của chủ sở hữu về nội dung mà mình
            đăng tải đồng thời Người Sử Dụng cấp phép cho Zing MP3 tất cả bằng
            sáng chế, nhãn hiệu, thương mại, bí mật thương mại, hoặc quyền khác
            liên quan đến nội dung để phổ biến nội dung trên dịch vụ Zing MP3
            theo các Điều khoản Dịch vụ.
          </li>
          <li>
            Ngoài những nội dung Zing MP3 chủ động đăng tải, Zing MP3 không
            chứng thực bất kỳ nội dung nào được đăng tải, sử dụng bởi bất kỳ
            Người Sử Dụng nào. Zing MP3 không cho phép các hoạt động vi phạm bản
            quyền và xâm phạm quyền sở hữu trí tuệ trên Dịch vụ. Zing MP3 sẽ chủ
            động loại bỏ tất cả các nội dung Người Sử Dụng đăng tải mà không cần
            báo trước nếu Zing MP3 nhận định hoặc nhận được thông báo rằng Người
            Sử Dụng đã đăng tải những nội dung vi phạm quyền sở hữu trí tuệ.
          </li>
          <li>
            Đây là website mạng xã hội Zing MP3 thuộc quyền sở hữu của VNG, VNG
            cho phép Người Sử Dụng đăng tải, cung cấp, trao đổi các thông tin,
            hình ảnh hoặc các nội dung khác lên trên website trừ những nội dung
            cấm được quy định trong bản Quy chế này và các văn bản pháp luật
            liên quan.
          </li>
          <li>
            Người Sử Dụng được đăng tải bài hát, MV, clip ngắn và/hoặc những nội
            dung khác phù hợp với tiêu chí của Zing MP3. Bạn đồng ý rằng bạn sẽ
            không đăng tải lên Zing MP3 các nội dung đã có bản quyền, các bí mật
            thương mại hoặc các nội dung khác liên quan tới các quyền sở hữu trí
            tuệ của bên thứ ba, trừ trường hợp bạn là chủ sở hữu hợp pháp của
            các nội dung này hoặc có sự chấp thuận từ chủ sở hữu.
          </li>
          <li>
            Bạn đồng ý để chúng tôi tự do kinh doanh, sử dụng, phát tán, trình
            chiếu, chỉnh sửa, biên soạn bất kỳ ý tưởng, khái niệm, cách thức, đề
            xuất, gợi ý, bình luận hoặc hình thức khác của bạn mà bạn cung cấp,
            trao đổi, chia sẻ thông qua việc sử dụng Zing MP3 một cách hoàn toàn
            miễn phí. Bạn đồng ý từ bỏ bất kỳ quyền và yêu cầu với bất kỳ khoản
            tiền thưởng, phí, nhuận bút, lệ phí hoặc các chi trả khác liên quan
            đến việc chúng tôi kinh doanh, sử dụng, phát tán, trình chiếu, chỉnh
            sửa, biên soạn bất kỳ hoặc tất cả những thông tin, hình ảnh mà bạn
            cung cấp, chia sẻ, trao đổi của bạn.
          </li>
          <li>
            Bạn cũng cho phép Người Sử Dụng sản phẩm của VNG được quyền sử dụng
            lại thông tin đăng tải của bạn bao gồm nhưng không giới hạn việc
            chỉnh sửa lại, biên soạn, phân tán, trình chiếu nội dung đăng tải đó
            vì mục đích cá nhân hoặc phi thương mại.
          </li>
          <li>
            Tất cả quyền sở hữu trí tuệ tồn tại trong Zing MP3 (ngoại trừ quyền
            sở hữu trí tuệ đối với các nội dung do Người Sử Dụng upload) đều
            thuộc về VNG hoặc được cấp phép hợp pháp cho VNG sử dụng, theo đó,
            tất cả các quyền hợp pháp đều được đảm bảo. Trừ khi được sự đồng ý
            bằng văn bản của VNG, bạn không được phép xuất bản, tái sản xuất,
            truyền hoặc xâm phạm bằng các hình thức khác tới quyền sở hữu trí
            tuệ sản phẩm của VNG.
          </li>
          <li>
            Trong mọi trường hợp, Zing MP3 được quyền xử lý các thông tin đăng
            tải cho phù hợp với thuần phong mỹ tục, các quy tắc đạo đức và các
            quy tắc đảm bảo an ninh quốc gia, và chúng tôi có toàn quyền cho
            phép hoặc không cho phép bài viết, thông tin, hình ảnh của bạn xuất
            hiện hay tồn tại trên website.
          </li>
          <li>
            Bạn hiểu và đồng ý rằng, khi sử dụng website mạng xã hội này, bạn sẽ
            tiếp nhận nhiều nội dung thông tin, hình ảnh được đăng tải từ nhiều
            nguồn khác nhau. Ngoài những nội dung Zing MP3 chủ động đăng tải,
            VNG không chịu trách nhiệm về mức độ chính xác, tính hữu ích, độ an
            toàn, hoặc các quyền sở hữu trí tuệ liên quan tới những thông tin mà
            Người Sử Dụng website đăng tải. Khi sử dụng sản phẩm có thể bạn thấy
            một vài thông tin, bình luận do Người Sử Dụng đăng tải không đúng sự
            thật, hoặc gây phản cảm, trong trường hợp này, bạn có thể thôi không
            sử dụng sản phẩm và cam kết không có những hành động xâm phạm tới
            VNG và Zing MP3.
          </li>
          <li>
            Ngoài các sản phẩm của VNG, Zing MP3 có thể cho phép hoặc liên kết
            với đối tác thứ ba để cung cấp các sản phẩm, dịch vụ của họ trên
            Zing MP3, do đó, khi tải, cài đặt hoặc sử dụng một sản phẩm như vậy,
            Người Sử Dụng thừa nhận rằng (i) Người Sử Dụng đã tìm hiểu và chấp
            thuận các điều khoản sử dụng dịch vụ của bên thứ ba (ii) mọi trách
            nhiệm phát sinh liên quan đến dịch vụ là của bên thứ ba, VNG sẽ hỗ
            trợ Người Sử Dụng nhưng không chịu trách nhiệm về các dịch vụ này.
          </li>
          <li>
            Để đáp ứng nhu cầu và trải nghiệm của Người Sử Dụng, VNG theo kế
            hoạch và quyết định của mình sẽ tiến hành nâng cấp, cập nhật thường
            xuyên các phiên bản, tính năng mới Zing MP3 mà không phải báo trước
            với Người Sử Dụng. Thông tin chi tiết về phiên bản cập nhật sẽ được
            VNG công bố tại website: zingmp3.vn.
          </li>
          <li>
            Người Sử Dụng hiểu rằng khi muốn tìm cách xóa nội dung của mình từ
            Zing MP3, việc này phải mất một khoảng thời gian nhất định. Vì vấn
            đề kỹ thuật và quy trình nên có thể không theo ý muốn của Người Sử
            Dụng. Người Sử Dụng chấp nhận những rủi ro phát sinh và Zing MP3
            được loại trừ trách nhiệm này. Chúng tôi khuyên bạn nên lưu giữ một
            bản trước khi đăng tải lên Zing MP3.
          </li>
          <li>
            Người Sử Dụng đồng ý cấp quyền cho VNG sử dụng nội dung trao đổi
            thông tin của bạn cho mục đích quảng bá, phát triển dịch vụ, bao gồm
            nhưng không giới hạn các dịch vụ mới mà chúng tôi có thể cung cấp
            trong tương lai.
          </li>
          <li>
            Người Sử Dụng đồng ý rằng VNG có thể giữ lại hoặc tiết lộ nội dung
            của bạn, bao gồm cả Thông Tin Cá Nhân cho cơ quan có thẩm quyền theo
            quy định pháp, hoặc theo quá trình hợp pháp khác. Trong quá trình
            hoạt động, cho các mục đích duy trì dịch vụ và đảm bảo lợi ích người
            dùng VNG có thể sẽ chuyển giao các thông tin của bạn cho bên thứ ba
            phù hợp với các quy định của pháp luật mà không yêu cầu phải có sự
            đồng ý trước của bạn.
          </li>
          <li>
            Trong quá trình sử dụng Zing MP3, nếu bạn vi phạm bất kỳ quy định
            nào trong Thỏa Thuận này, chúng tôi có toàn quyền, ngay lập tức và
            không cần thông báo trước cho bạn, chấm dứt, xóa bỏ tài khoản của
            bạn mà không phải chịu bất cứ trách nhiệm nào đối với bạn, đồng thời
            tùy theo mức độ vi phạm, chúng tôi có thể từ chối việc bạn đăng ký
            để sử dụng các dịch vụ khác của VNG.
          </li>
          <li>
            Mọi vi phạm của chủ tài khoản trong quá trình sử dụng sản phẩm Zing
            MP3, VNG có quyền tước bỏ mọi quyền lợi của chủ tài khoản đối với
            việc sử dụng sản phẩm cũng như sẽ yêu cầu cơ quan chức năng truy tố
            bạn trước pháp luật nếu cần thiết.
          </li>
          <li>
            Zing MP3 quan tâm tới sự an toàn và riêng tư, quyền lợi của tất cả
            thành viên sử dụng sản phẩm của mình, đặc biệt là trẻ em. Vì vậy,
            nếu bạn là cha mẹ hoặc người giám hộ hợp pháp của Người Sử Dụng, bạn
            có trách nhiệm xem xét và xác định sản phẩm, nội dung nào của Zing
            MP3 thích hợp cho con em của mình. Tương tự, nếu Người Sử Dụng là
            trẻ em thì bạn phải hỏi ý kiến cha mẹ hoặc người giám hộ hợp pháp
            của mình về việc sản phẩm, nội dung mình sử dụng có phù hợp hay
            không.
          </li>
          <li>
            Người Sử Dụng có thể sẽ chịu trách nhiệm bồi thường thiệt hại dân
            sư, khả năng bị phạt vi phạm hành chính hoặc bị truy tố trách nhiệm
            hình sự nếu có hành vi vi phạm quyền tác giả hoặc quyền liên quan
            khi sử dụng Zing MP3
          </li>
        </ol>
        <h3>Điều 7. Sử dụng dịch vụ tính phí.</h3>
        <p>
          Zing MP3 cung cấp các gói dịch vụ tính phí (“Gói VIP”) cho phép người
          sử dụng tiếp cận các tính năng ưu đãi vượt trội so với dịch vụ miễn
          phí thông thường. Gói VIP được chia thành các kỳ hạn, nhóm đối tượng
          khác nhau tương ứng với các mức giá linh hoạt để người sử dụng dễ dàng
          lựa chọn.
        </p>
        <br />
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            <strong>Phí và thanh toán (Fees and Payment)</strong>
            <p>
              <strong>a.</strong> Phí công bố cho từng Gói VIP đã bao gồm toàn
              bộ các loại thuế, lệ phí và là số tiền cuối cùng mà Người Sử Dụng
              phải thanh toán để sử dụng Gói VIP. Người sử dụng lựa chọn Gói VIP
              phù hợp với kế hoạch sử dụng và thanh toán phí sử dụng các Gói VIP
              bằng các phương tiện thanh toán điện tử khả dụng theo lựa chọn của
              Zing MP3.
            </p>
            <p>
              <strong>b.</strong> Ngay khi khoản thanh toán được chấp thuận thì
              Gói VIP tương ứng được kích hoạt, tự động xác nhận trên tài khoản
              của Người Sử Dụng.
            </p>
          </li>
          <li>
            <strong>Hủy và thay đổi (Cancellation and Change)</strong>
            <p>
              <strong>a.</strong> Sau khi đăng ký, Người Sử Dụng có quyền mua
              thêm các Gói VIP khác để kéo dài thời gian sử dụng. Nếu Gói VIP
              mua thêm có tính năng vượt trội hơn thì thời gian của Gói VIP đã
              mua trước đó được quy đổi tương đương thành ngày sử dụng của Gói
              VIP mua thêm (theo tỉ lệ về phí sử dụng đã bỏ ra và các yếu tố
              khác) cộng dồn vào số ngày sử dụng mặc định của Gói VIP mua thêm.
            </p>
            <p>
              <strong>b.</strong> Phí sử dụng không được hoàn lại trong bất kỳ
              trường hợp nào, nếu Người Sử Dụng hủy đăng ký Gói VIP thì thời hạn
              sử dụng của Gói VIP đó vẫn được bảo lưu.
            </p>
          </li>
          <li>
            <strong>Tự động gia hạn (Auto-Renewal)</strong>
            <p>
              <strong>a.</strong> Tính năng này giúp trải nghiệm Người Sử Dụng
              không bị gián đoạn, cụ thể: Đối với một số Gói VIP được áp dụng
              tính năng tự động gia hạn, trong vòng 24 giờ trước khi hết thời
              hạn sử dụng, tính năng này sẽ giúp tự kích hoạt thêm 1 chu kỳ sử
              dụng nữa bằng với thời hạn đang áp dụng của Gói VIP đó và ghi nợ
              một khoản thanh toán tương ứng vào phương tiện thanh toán của
              Người Sử Dụng.
            </p>
            <p>
              <strong>b.</strong> Việc áp dụng tự động gia hạn được thông báo
              tại giao điện đăng ký Gói VIP tương ứng.
            </p>
            <p>
              <strong>c.</strong> Để dừng tính năng tự động gia hạn, Người Sử
              Dụng phải hủy đăng ký Gói VIP ít nhất 24 giờ trước khi hết hạn sử
              dụng
            </p>
          </li>
          <li>
            <strong>Thay đổi:</strong> Các thay đổi (nếu có) về mức phí, các đặc
            tính của Gói VIP sẽ theo quyết định của VNG và sẽ được thông báo
            công khai trên website, ứng dụng. Phí sử dụng sau khi thay đổi sẽ
            được tự động áp dụng trong các lần gia hạn kế tiếp.
          </li>
        </ol>
        <h3>Điều 8. Quyền và trách nhiệm của chủ tài khoản.</h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            Khi đăng ký tài khoản Zalo ID, Người Sử Dụng được sử dụng một phần
            hoặc tất cả các dịch vụ trong sản phẩm Zing MP3.
          </li>
          <li>
            Trong quá trình sử dụng sản phẩm, Người Sử Dụng được hỗ trợ giải
            quyết rủi ro nếu phát sinh sự cố.
          </li>
          <li>
            Người Sử Dụng có trách nhiệm bảo mật thông tin tài khoản, nếu những
            thông tin trên bị tiết lộ dưới bất kỳ hình thức nào thì Người Sử
            Dụng phải chấp nhận những rủi ro phát sinh. VNG sẽ căn cứ vào những
            thông tin hiện có trong tài khoản để làm căn cứ quyết định chủ sở
            hữu tài khoản nếu có tranh chấp và VNG sẽ không chịu trách nhiệm về
            mọi tổn thất phát sinh.
          </li>
          <li>
            Người Sử Dụng đồng ý sẽ thông báo ngay cho Zing MP3 về bất kỳ trường
            hợp nào sử dụng trái phép tài khoản và mật khẩu của bạn hoặc bất kỳ
            các hành động phá vỡ hệ thống bảo mật nào. Bạn cũng bảo đảm rằng,
            bạn luôn thoát tài khoản của mình sau mỗi lần sử dụng.
          </li>
          <li>
            Người Sử Dụng phải tuân thủ tuyệt đối quy định về các hành vi cấm,
            các nội dung trao đổi cung cấp thông tin được quy định trong quy chế
            này. Nếu vi phạm một hoặc nhiều hành vi, tùy thuộc vào mức độ vi
            phạm VNG sẽ khóa tài khoản vĩnh viễn, tước bỏ mọi quyền lợi của bạn
            đối các sản phẩm của VNG và sẽ yêu cầu cơ quan chức năng truy tố bạn
            trước pháp luật nếu cần thiết.
          </li>
          <li>
            Người Sử Dụng phải chịu trách nhiệm pháp lý về mọi nội dung do Người
            Sử Dụng đăng tải trên Zing MP3 bao gồm nhưng không giới hạn ở trách
            nhiệm bồi thường thiệt hại cho VNG và các bên liên quan vì vi phạm
            quyền sở hữu trí tuệ.
          </li>
          <li>
            Chúng tôi có quyền ngay lập tức chấm dứt hoặc khóa tài khoản của bạn
            hoặc việc sử dụng Dịch vụ Zing MP3 hoặc truy cập vào nội dung ở bất
            kỳ thời điểm nào mà không cần thông báo hoặc có trách nhiệm, nếu
            Zing MP3 xác định rằng bạn đã vi phạm các Điều khoản sử dụng, vi
            phạm luật pháp, quy tắc, quy định, tham gia vào các hành vi không
            thích hợp khác, hoặc vì lý do kinh doanh khác. Chúng tôi cũng có
            quyền chấm dứt tài khoản của bạn hoặc việc sử dụng của Dịch vụ Zing
            MP3 hoặc truy cập vào các nội dung nếu việc sử dụng gây quá tải cho
            máy chủ của chúng tôi. Trong một số trường hợp, chúng tôi có quyền
            sử dụng công nghệ để hạn chế hoạt động như là giới hạn số lượt truy
            cập đến máy chủ Zing MP3 hoặc dung lượng sử dụng của người dùng. Bạn
            đồng ý tôn trọng những giới hạn và không có bất kì hành động nào để
            phá vỡ, lẩn tránh hoặc bỏ qua chúng.
          </li>
          <li>Thực hiện quyền và trách nhiệm khác theo quy định pháp luật.</li>
        </ol>
        <h3>Điều 9. Quyền và trách nhiệm của VNG</h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            Trong quá trình sử dụng sản phẩm, nếu bạn vi phạm bất cứ điều khoản
            nào trong quy chế sử dụng Zalo ID và Thỏa thuận này hoặc thỏa thuận
            sử dụng sản phẩm khác của VNG được quy định trên website, chúng tôi
            có toàn quyền chấm dứt, xóa bỏ tài khoản của bạn mà không cần sự
            đồng ý của bạn và không phải chịu bất cứ trách nhiệm nào đối với
            bạn.
          </li>
          <li>
            Mọi vi phạm của chủ tài khoản trong quá trình sử dụng sản phẩm của
            VNG, VNG có quyền tước bỏ mọi quyền lợi của chủ tài khoản đối với
            việc sử dụng các sản phẩm của VNG cũng như sẽ yêu cầu cơ quan chức
            năng truy tố bạn trước pháp luật nếu cần thiết.
          </li>
          <li>
            Khi phát hiện những vi phạm như sử dụng cheats, hacks, hoặc những
            lỗi khác, VNG có quyền sử dụng những thông tin mà bạn cung cấp khi
            đăng ký tài khoản để chuyển cho Cơ quan chức năng giải quyết theo
            quy định của pháp luật.
          </li>
          <li>
            Khi phát hiện những vi phạm về nội dung cấm được quy định tại Thỏa
            thuận này, VNG có quyền tắt ngay lập tức các bài hát/ MV, video hoặc
            nội dung vi phạm khác đang được phát bởi Người Sử Dụng và/hoặc cảnh
            cáo, khóa, tạm dừng chat của Người Sử Dụng vi phạm. Trong trường hợp
            nhận được tố cáo của người dùng khác, VNG sẽ tiến hành giám sát kiểm
            tra và log data cùng những chứng cứ liên quan, nếu vi phạm VNG có
            quyền tắt ngay lập tức các video đang được phát sóng bởi người dung
            và/hoặc cảnh cáo, khóa, tạm dừng chat của Người Sử Dụng vi phạm. VNG
            có toàn quyền quyết định các hình thức xử lý đối với các trường hợp
            vi phạm. Tuy vào tính chất sự việc, mức độ ảnh hưởng và nghiêm
            trọng, VNG sẽ đưa ra hình thức xử lý phù hợp. Quyết định của VNG là
            quyết định cuối cùng và người dùng đồng ý chấp hành.
          </li>
          <li>
            Có trách nhiệm hỗ trợ chủ tài khoản trong quá trình sử dụng sản phẩm
            của VNG.
          </li>
          <li>
            Nhận và giải quyết khiếu nại của khách hàng các trường hợp phát sinh
            trong quá trình sử dụng sản phẩm của VNG, tuy nhiên VNG chỉ hỗ trợ,
            nhận và giải quyết đối với tài khoản đăng ký đầy đủ thông tin, trung
            thực và chính xác.
          </li>
          <li>
            Có trách nhiệm bảo mật thông tin cá nhân của chủ tài khoản, VNG
            không bán hoặc trao đổi những thông tin này với bên thứ 3, trừ
            trường hợp theo quy định pháp luật hoặc được chủ tài khoản chấp
            nhận.
          </li>
        </ol>
        <h3>Điều 10. Giới hạn trách nhiệm và từ chối đảm bảo</h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            VNG sẽ không chịu trách nhiệm đối với bất cứ vấn đề gì về hệ thống
            trong quá trình bạn sử dụng sản phẩm.
          </li>
          <li>
            Nếu phát sinh rủi ro, thiệt hại trong trường hợp bất khả kháng bao
            gồm nhưng không giới hạn như chập điện, hư hỏng phần cứng, phần mềm,
            sự cố đường truyền internet hoặc do thiên tai .v.v. người ung phải
            chấp nhận những rủi ro, thiệt hại nếu có. VNG cam kết sẽ lỗ lực giảm
            thiểu những rủi ro, thiệt hại phát sinh tuy nhiên VNG sẽ không chịu
            bất cứ trách nhiệm nào phát sinh trong các trường hợp này.
          </li>
          <li>
            VNG hoàn toàn không chịu trách nhiệm rủi ro về mọi giao dịch của bạn
            với bên thứ 3 trong quá trình sử dụng sản phẩm của VNG. Khi bạn sử
            dụng sản phẩm và/hoặc giao dịch với bên thứ 3, bạn đã hiểu và đồng ý
            tự chịu trách nhiệm những rủi ro phát sinh.
          </li>
          <li>
            Bài viết, clip, video của Người Sử Dụng có thể có những hạn chế, có
            thể gây phản đối, bất hợp pháp, không chính xác, hoặc không phù hợp.
            Zing MP3 không có trách nhiệm cho bất kỳ bài viết nào, clip, video,
            hình ảnh nào mà Người Sử Dụng đăng tải. Nội dung được đăng không
            phản ánh quan điểm hay chính sách của Zing MP3. Chúng tôi có quyền
            giám sát, hạn chế hoặc loại bỏ các nội dung đăng tải trên khi chúng
            tôi có cơ sở cho rằng, nội dung được đăng tải là vi phạm thỏa thuận
            này cũng như vi phạm pháp luật.
          </li>
        </ol>
        <h3>Điều 11. Thông tin và bảo mật</h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            Quy trình đăng ký tài khoản Zalo ID chỉ yêu cầu số Tên, điện thoại
            hợp lệ do bạn sở hữu và mật khẩu. Việc cung cấp những thông tin khác
            cho VNG hay không tùy thuộc vào quyết định của Người Sử Dụng. Tuy
            nhiên VNG chỉ tiếp nhận và hỗ trơ giải quyết tranh chấp trong trường
            hợp bạn cung cấp đầy đủ, chính xác thông tin theo quy định tại quy
            chế thỏa thuận này. Bạn cũng đồng ý rằng user ID, Email, hoặc những
            thông tin bạn cung cấp có thể có thể xuất hiện trên các website –
            sản phẩm của VNG.
          </li>
          <li>
            VNG có thể sử dụng Thông Tin Cá Nhân của Người Sử Dụng cho mục đích
            chăm sóc khách hàng, khảo sát về các sản phẩm và dịch vụ của VNG,
            phát triển các dịch vụ mới và cải thiện các dịch vụ hiện có đáp ứng
            mong muốn và sở thích của Người Sử Dụng
          </li>
          <li>
            Zing MP3 có thể sử dụng Dữ liệu để tùy biến và cải tiến nhằm phục vụ
            bạn tốt hơn. Chúng tôi không sử dụng thông tin của bạn vào mục đích
            bất hợp pháp. Zing MP3 được quyền cung cấp thông tin của bạn cho bên
            thứ 3 trong các trường hợp nhưng không giới hạn:
            <p>
              <strong>a. </strong>Zing MP3 được bạn chấp thuận
            </p>
            <p>
              <strong>b. </strong>Dịch vụ Zing MP3 cung cấp yêu cầu sự tương tác
              với một bên thứ ba hoặc do bên thứ ba cung cấp;
            </p>
            <p>
              <strong>c. </strong>Theo các quy định hành pháp hoặc luật pháp;
            </p>
            <p>
              <strong>d. </strong>Trong trường hợp Người Sử Dụng sử dụng website
              liên kết trên website của mạng xã hội này để truy cập, đề nghị
              Người Sử Dụng đọc kỹ thỏa thuận sử dụng và chính sách bảo vệ sự
              riêng tư trên các website đó.
            </p>
          </li>
          <li>
            VNG luôn cố gắng đáp ứng những tiêu chuẩn về dữ liệu trong chính
            sách bảo vệ riêng tư, tuy nhiên VNG không bị buộc phải bảo đảm những
            tiêu chuẩn đó. Có thể có những nhân tố vượt ra ngoài tầm kiểm soát
            của VNG dẫn đến việc Dữ liệu bị tiết lộ. Vì vậy, VNG không chịu
            trách nhiệm bảo đảm Dữ liệu luôn được duy trì ở tình trạng hoàn hảo
            hoặc không bị tiết lộ.
          </li>
          <li>
            Mọi thông tin cá nhân của Người Sử Dụng sẽ được chúng tôi nỗ lực cao
            để bảo mật, không tiết lộ ra ngoài. VNG không bán hay trao đổi những
            thông tin này với bất kỳ một bên thứ ba nào khác trừ trường hợp được
            quy định trong Thỏa Thuận này.
          </li>
          <li>
            Trong quá trình sử dụng Zing MP3, Người Sử Dụng đồng ý nhận tất cả
            thông báo từ VNG liên quan tới sản phẩm và dịch vụ qua thư điện tử,
            thư bưu chính hoặc điện thoại của Người Sử Dụng.
          </li>
        </ol>
        <h3>
          Điều 12. Giải quyết khiếu nại, tố cáo, bồi thường và Thỏa thuận trọng
          tài
        </h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            <strong>Nguyên tắc lý vi phạm:</strong> Người Sử Dụng vi phạm Thỏa
            Thuận này thì tùy theo mức độ nghiêm trọng của hành vi vi phạm, Zing
            MP3 sẽ đơn phương và toàn quyền quyết định hình thức xử lý phù hợp
            dưới đây:
            <p>
              <strong>a.</strong> Khóa tài khoản Zalo ID có thời hạn hoặc vĩnh
              viễn, điều đó đồng nghĩa với việc nội dung được đăng tải Zing MP3
              bởi Người Sử Dụng sẽ bị xóa bỏ.
            </p>
            <p>
              <strong>b.</strong> Hủy bỏ toàn bộ những quyền lợi của Người Sử
              Dụng gắn liền với Zing MP3 và các sản phẩm, dịch vụ do VNG cung
              cấpM
            </p>
          </li>
          <li>
            <strong>Giải quyết tranh chấp, khiếu nại</strong>
            <p>
              <strong>a.</strong> Bất kỳ tranh chấp phát sinh trong quá trình sử
              dụng của sử dụng Zing MP3 sẽ được giải quyết theo pháp luật hiện
              hành của nước Cộng hòa xã hội chủ nghĩa Việt Nam.
            </p>
            <p>
              <strong>b.</strong> Bất kỳ khiếu nại nào phát sinh trong quá sử
              dụng Zing MP3 phải được gửi đến VNG ngay sau khi xảy ra sự kiện
              phát sinh khiếu nại. Địa chỉ liên lạc: Bộ phận Zing MP3 Tầng 2 Tòa
              nhà Sarim số 72 Nguyễn Cơ Thạch, Phường An Lợi Đông, Quận 2,
              TP.HCM. Email: copyright@mp3.zing.vn
            </p>
            <p>
              <strong>c.</strong> VNG sẽ căn cứ từng trường hợp cụ thể để có
              phương án giải quyết cho phù hợp. Khi thực hiện quyền khiếu nại,
              người khiếu nại có nghĩa vụ cung cấp các giấy tờ, bằng chứng, căn
              cứ có liên quan đến việc khiếu nại và phải chịu trách nhiệm về nội
              dung khiếu nại, giấy tờ, bằng chứng, cắn cứ do mình cung cấp theo
              quy định pháp luật.
            </p>
            <p>
              <strong>d.</strong> VNG chỉ hỗ trợ, giải quyết khiếu nại, tố cáo
              của Người Sử Dụng trong trường hợp bạn đã ghi đầy đủ, trung thực
              và chính xác thông tin khi đăng ký tài khoản.
            </p>
            <p>
              <strong>e.</strong> Đối với tranh chấp giữa Người Sử Dụng Zing MP3
              với nhau, có thể VNG sẽ gửi thông tin liên hệ cho các đối tượng
              tranh chấp để các bên tự giải quyết hoặc VNG sẽ căn cứ vào tình
              hình thực tế để giải quyết. Theo đó, VNG sẽ bảo vệ quyền lợi tối
              đa có thể cho Người Sử Dụng Zing MP3 hợp pháp và chính đáng.
            </p>
            <p>
              <strong>f.</strong> Người Sử Dụng đồng ý bảo vệ, bồi hoàn và loại
              trừ VNG khỏi những nghĩa vụ pháp lý, tố tụng, tổn thất, chi phí
              bao gồm nhưng không giới hạn án phí, chi phí luật sư, chuyên gia
              tư vấn có liên quan đến việc giải quyết hoặc phát sinh từ sự vi
              phạm của Người Sử Dụng trong quá trình sử dụng Zing MP3
            </p>
            <p>
              <strong>g.</strong> Mọi tranh chấp liên quan tới việc sử dụng Zing
              Mp3 giữa Người Sử Dụng và VNG sẽ được giải quyết bằng trọng tài
              tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) theo Quy tắc tố
              tụng trọng tài của Trung tâm này và các điều kiện sau:
              <br />
              &nbsp;&nbsp;&nbsp;+ Giải quyết theo thủ tục rút gọn nếu khả dụng
              tại thời điểm giải quyết tranh chấp; <br />
              &nbsp;&nbsp;&nbsp;+ Số lượng trọng tài viên là 01 do VIAC chỉ
              định;
              <br />
              &nbsp;&nbsp;&nbsp;+ Địa điểm trọng tài là TP. Hồ Chí Minh;
              <br />
              &nbsp;&nbsp;&nbsp;+ Ngôn ngữ trọng tài là tiếng Việt
            </p>
          </li>
        </ol>
        <h3>Điều 13. Quy tắc quản lí xử phạt vi phạm Người dùng</h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            <b style={{ fontWeight: "bold" }}>Nguyên tắc</b>
            <p>
              <strong>a.</strong> Người Sử Dụng vi phạm thỏa thuận cung cấp và
              sử dụng mạng xã hội thì tùy theo mức độ nghiêm trọng của hành vi
              vi phạm sẽ bị xử phạt tương ứng.
            </p>
            <p>
              <strong>b.</strong> Trường hợp hành vi vi phạm của Người Sử Dụng
              chưa được quy định trong thỏa thuận này thì tùy vào tính chất, mức
              độ của hành vi vi phạm, Zing MP3 sẽ đơn phương, toàn quyền quyết
              định mức xử phạt hợp lý.
            </p>
            <p>
              <strong>c.</strong> Hình thức xử phạt khóa tài khoản Zalo ID có
              thời hạn hoặc vĩnh viễn, điều đó đồng nghĩa với việc Người Sử Dụng
              cũng không thể sử dụng các sản phẩm khác khi truy cập từ tài khoản
              Zalo ID.
            </p>
            <p>
              <strong>d.</strong> Nếu tài khoản Zalo ID bị khóa vĩnh viễn, thì
              toàn bộ những quyền lợi của chủ tài khoản cũng sẽ khóa vĩnh viễn.
            </p>
            <p>
              <strong>e.</strong> Các hình thức xử phạt: <br />
              &nbsp;&nbsp;&nbsp;+ Hình thức xử phạt 1: Khóa tài khoản 10 ngày
              <br />
              &nbsp;&nbsp;&nbsp;+ Hình thức xử phạt 2: Khóa tài khoản 20 ngày{" "}
              <br />
              &nbsp;&nbsp;&nbsp;+ Hình thức xử phạt 3: Khóa tài khoản 30 ngày
              hoặc khóa tài khoản vĩnh viễn.
            </p>
          </li>
          <li>
            <b style={{ fontWeight: "bold" }}>
              Hình thức xử phạt 1, khóa tài khoản 10 ngày theo khoản 1 điều này
              được áp dụng bao gồm nhưng không giới hạn đối với các hành vi sau.
            </b>
            <p>
              <strong>a.</strong> Cung cấp đường dẫn đến trang thông tin điện tử
              có nội dung vi phạm quy định pháp luật.
            </p>
            <p>
              <strong>b.</strong> Tiết lộ bí mật đời tư hoặc bí mật khác khi
              chưa được sự đồng ý của cá nhân, tổ chức có liên quan trừ trường
              hợp Pháp luật quy định. Ngoài chịu xử phạt do Zing MP3 áp dụng,
              Người Sử Dụng vi phạm còn chịu trách nhiệm trực tiếp với người bị
              xậm phạm quyền và Pháp luật.
            </p>
            <p>
              <strong>c.</strong> Đăng tải những thông tin, nội dung mê tín dị
              đoan;
            </p>
            <p>
              <strong>d.</strong> Công kích, xuyên tạc, xúc phạm nhân phẩm các
              Người Sử Dụng khác.
            </p>
            <p>
              <strong>e.</strong> Lôi kéo công đồng thành viên tham gia có chủ
              đích bằng các câu view sai phạm, vi phạm văn hóa đạo đức.
            </p>
          </li>
          <li>
            <b style={{ fontWeight: "bold" }}>
              Hình thức xử phạt 2, khóa tài khoản 20 ngày theo khoản 1 điều này
              được áp dụng bao gồm nhưng không giới hạn đối với các hành vi sau.
            </b>
            <p>
              - Đăng tải thông tin miêu tả tỉ mỉ hành động dâm ô, chém, giết,
              tai nạn rùng rợn trong các tin, bài, clip, ảnh không phù hợp thuần
              phong mỹ tục Việt Nam.
            </p>
            <p>
              - Chát khiêu dâm, spam chat, kích động các thành viên khác để gây
              rối hoặc tuyên truyền những thông tin vi phạm.
            </p>
            <p>
              - Đăng tải nội dung, thông tin sai sự thật, vu khống, xuyên tạc,
              xúc phạm uy tín của cơ quan, tổ chức và danh dự, nhân phẩm của cá
              nhân;
            </p>
            <p>- Đăng tải thông tin không phù hợp với lợi ích đất nước;</p>
            <p>
              - Đăng tải tác phẩm đã có quyết định cấm lưu hành hoặc tịch thu;
            </p>
            <p>
              - Quảng cáo: nội dung đăng tải của Người Sử Dụng có chứa thông tin
              quảng cáo hoặc sử dụng các văn bản, hình ảnh, âm thanh, hoặc video
              và thông tin quảng cáo khác bao gồm nhưng không giới hạn những nội
              dung như: Tuyên truyền hoặc liên quan đến việc treo máy dùm/ mua
              bán ID mua bán tài khoản, chuyên bẻ khóa tài khoản, spam bộ sản
              phẩm giải trí, vật phẩm riêng, treo máy ngoài, hỗ trợ, sản phẩm,
              hàng hóa … và các thông tin quảng cáo khác mà không có sự đồng ý
              bằng văn bản của VNG.
            </p>
            <p>
              - Xâm phạm riêng tư: sử dụng hình ảnh cá nhân của người khác, công
              khai những tư liệu cá nhân và những thông tin của khác như danh
              tính, địa chỉ, số điện thoại mà chưa được sự đồng ý.
            </p>
            <p>
              - Công kích người khác: sử dụng hình ảnh, thông tin, âm thanh hoặc
              video, xúc phạm, đưa thông tin xuyên tạc, vu khống, nhạo bang, xúc
              phạm uy tín tới tổ chức, cá nhân.
            </p>
            <p>
              - Vi phạm bản quyền: sử dụng nội dung không thuộc bản quyền của
              mình để đăng tải lên Zing MP3 mà không được phép của chủ quyền.
            </p>
          </li>
          <li>
            <b style={{ fontWeight: "bold" }}>
              Hình thức xử phạt 3, khóa tài khoản 30 ngày hoặc khóa vĩnh viễn
              theo khoản 1 điều này được áp dụng bao gồm nhưng không giới hạn
              đối với các hành vi sau:
            </b>
            <p>
              - Người Sử Dụng có hành vi lợi dụng Zing MP3 nhằm chống phá nước
              Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam. Phá hoại khối đại đoàn kết
              toàn dân tộc.
            </p>
            <p>
              - Tuyên truyền kích động chiến tranh xâm lược, gây hận thù giữa
              các dân tộc và nhân dân các nước; kích động bạo lực; truyền bá tư
              tưởng phản động.
            </p>
            <p>
              - Xuyên tạc sự thật lịch sử, phủ nhận thành tựu cách mạng; xúc
              phạm dân tộc, danh nhân, anh hùng dân tộc.
            </p>
            <p>
              - Đăng tải, sử dụng hình ảnh bản đồ Việt Nam nhưng không thể hiện
              hoặc thể hiện không đúng chủ quyền quốc gia.
            </p>
            <p>
              - Sử Dụng đặt tên tài khoản trùng tên với các vĩ nhân, các vị anh
              hùng của dân tộc, các vị lãnh đạo của đảng và nhà nước, hoặc Người
              Sử Dụng có sử dụng hình ảnh, video, phát ngôn, chát… có chứa thông
              tin bàn luận về vấn đề chính trị hoặc tiết lộ bí mật nhà nước Cộng
              hòa Xã hội Chủ nghĩa Việt Nam.
            </p>
            <p>
              - Thông tin, hình ảnh, video khiêu dâm: Người Sử Dụng đăng tải
              hình ảnh, âm thanh, video khiêu dâm, chat sex, video khiêu dâm ở
              mức độ cao.
            </p>
            <p>
              - Đăng tải thông tin, quảng cáo sản phẩm, hàng hóa, dịch vụ cấm.
            </p>
            <p>
              - Lan truyền thông tin lừa đảo: Sử dụng văn bản, hình ảnh, âm
              thanh hoặc video có chứa thông tin lừa đảo giả mạo các tổ chức
              hoặc cá nhân; gian lận, lừa đảo tài sản của người khác hoặc tài
              khoản Zing MP3.
            </p>
            <p>
              - Phá hoại hệ thống mạng xã hội Zing MP3: Thành viên lợi dụng việc
              sử dụng sản phẩm để xâm nhập vào hệ thống máy chủ nhằm phá hoại
              sản phẩm hoặc cản trở việc truy cập thông tin. Thành viên sử dụng
              công cụ kỹ thuật nhằm tăng điểm hoạt động, vật phẩm hoặc nhằm treo
              máy, spam chat.
            </p>
            <p>
              - Sử dụng Zing MP3 để lôi kéo tổ chức hội họp thực tế ở bên ngoài
              thực hiện các hành vi vi phạm pháp luật.
            </p>
          </li>
        </ol>
        <h3>Điều 14. Bản quyền và quy trình báo cáo vi phạm bản quyền</h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            Tất cả quyền Sở Hữu Trí Tuệ của hoặc liên quan đến Zing MP3 (ngoại
            trừ quyền sở hữu trí tuệ liên quan tới các nội dung do Người Sử Dụng
            đăng tải) thuộc quyền sở hữu toàn vẹn và duy nhất của VNG hoặc được
            cấp phép hợp pháp cho VNG sử dụng bao gồm cả các phiên bản cập nhật,
            nâng cấp.
          </li>
          <li>
            Trừ khi được sự đồng ý của VNG, Người Sử Dụng không được phép sử
            dụng, sao chép, xuất bản, tái sản xuất, truyền hoặc phân phát bằng
            bất cứ hình thức nào, bất cứ thành phần nào các quyền Sở Hữu Trí Tuệ
            đối với sản phẩm Zing MP3.
          </li>
          <li>
            Tại các khu vực Người Sử Dụng được phép đăng tải nội dung, Người Sử
            Dụng có thể chia sẻ thông tin được phép dưới các định dạng Zing MP3
            mặc định và Người Sử Dụng phải tự chịu trách nhiệm về tính hợp pháp
            và các trách nhiệm pháp lý với các nội dung, thông tin, hình ảnh và
            bất kỳ sự chia sẻ nào khác. Tuy nhiên, trong mọi trường hợp, Zing
            MP3 vẫn được bảo lưu quyền xử lý các thông tin đăng tải, phù hợp với
            thuần phong mỹ tục, các quy tắc đạo đức và các quy tắc đảm bảo an
            ninh quốc gia, và có toàn quyền cho phép hoặc không cho phép nội
            dung của Người Sử Dụng xuất hiện hoặc tồn tại trên Zing MP3.
          </li>
          <li>
            VNG có toàn quyền, bao gồm nhưng không giới hạn trong các quyền tác
            giả, thương hiệu, bí mật kinh doanh, nhãn hiệu và các quyền Sở Hữu
            Trí Tuệ khác trong sản phẩm Zing MP3 của VNG. Việc sử dụng quyền và
            sở hữu của VNG cần phải được VNG cho phép trước bằng văn bản. Ngoài
            việc được cấp phép bằng văn bản, VNG không cấp phép dưới bất kỳ hình
            thức nào khác cho dù đó là hình thức công bố hay hàm ý để Người Sử
            Dụng thực hiện các quyền trên. Và do vậy, Người Sử Dụng không có
            quyền sử dụng sản phẩm của chúng tôi vào mục đích thương mại mà
            không có sự cho phép bằng văn bản của chúng tôi trước đó.
          </li>
          <li>
            Người Sử Dụng đồng ý để VNG tự do sử dụng, tiết lộ, áp dụng và sửa
            đổi bất kỳ ứng dụng, ý tưởng, khái niệm, cách thức, đề xuất, gợi ý,
            bình luận hoặc hình thức thông báo nào khác mà Người Sử Dụng cung
            cấp thông qua việc sử dụng sản phẩm Zing MP3 một cách hoàn toàn miễn
            phí. Người Sử Dụng đồng ý từ bỏ bất kỳ quyền và yêu cầu với bất kỳ
            khoản tiền thưởng, phí, nhuận bút, lệ phí liên quan đến việc VNG sử
            dụng, tiết lộ, áp dụng, chỉnh sửa bất kỳ nội dung của Người Sử Dụng.
          </li>
          <li>
            Quy trình thông báo vi phạm bản quyền:
            <p>
              - Nếu Người Sử Dụng tin rằng bất kỳ nội dung, tài liệu, hình ảnh,
              video hoặc các tài liệu khác được cung cấp thông qua dịch vụ Zing
              MP3, bao gồm cả một liên kết vi phạm quyền Sở Hữu Trí Tuệ của bạn,
              vui lòng thông báo cho VNG về việc vi phạm bản quyền theo quy
              trình cụ thể được quy định dưới đây.
            </p>
            <p>
              - VNG sẽ xử lý từng thông báo vi phạm bản quyền mà VNG nhận được
              và xử lý theo quy định của pháp luật sở hữu trí tuệ.
            </p>
            <p>
              - Để giúp VNG có đủ cơ sở đáp ứng các yêu cầu của Người Sử Dụng,
              vui lòng gửi thông báo bằng văn bản với các thông tin sau:
            </p>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Chữ ký thật của người được ủy
            quyền thay mặt cho chủ sở hữu của một sản phẩm độc quyền.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Mô tả tác phẩm có bản quyền mà
            Người Sử Dụng cho là bị vi phạm.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Mô tả về nơi mà các tài liệu
            Người Sử Dụng cho là vi phạm nằm trên các dịch vụ Zing MP3 đủ để cho
            phép Zing MP3 xác định vị trí tài liệu đó.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Thông tin liên hệ của Người Sử
            Dụng như địa chỉ, số điện thoại, email để Zing MP3 có thể liên hệ
            với bạn. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Người Sử Dụng tuyên bố rằng,
            Người Sử Dụng tin tưởng việc sử dụng nội dung đó là không được phép
            của chủ sở hữu quyền tác giả, đại lý độc quyền hoặc pháp luật;{" "}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Người Sử Dụng tuyên bố rằng
            các thông tin trong thông báo của Người Sử Dụng là chính xác và chấp
            nhận chịu trách nhiệm trước pháp luật về các thông tin đó.
          </li>
        </ol>
        <h3>Điều 15. Hiệu lực của thỏa thuận</h3>
        <ol start={1} style={{ counterReset: "ol 0" }}>
          <li>
            Các điều khoản quy định tại Thỏa Thuận này được quy định trên
            website có thể được cập nhật, chỉnh sửa bất cứ lúc nào mà không cần
            phải thông báo trước tới Người Sử Dụng. VNG sẽ công bố rõ trên
            Website, diễn đàn về những thay đổi, bổ sung đó.
          </li>
          <li>
            Trong trường hợp một hoặc một số điều khoản Thỏa Thuận cung cấp và
            sử dụng dịch vụ mạng xã hội Zing MP3 này xung đột với các quy định
            của luật pháp Việt Nam, điều khoản đó sẽ được chỉnh sửa cho phù hợp
            với quy định pháp luật hiện hành, phần còn lại của Thỏa Thuận vẫn
            giữ nguyên giá trị.
          </li>
        </ol>
        <br />
      </div>
    </>
  );
};

export default Privacy;
