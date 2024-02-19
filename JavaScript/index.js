$(document).ready(()=>{
    const element = layui.element;
    const loading = $('#loading');
    const bodyContent = $('.layui-body-content');
    const headerTitle = $('#headerTitle');

    $('.layui-nav-child').on('click', 'dd', function() {
        const url = $(this).children('a').attr('href').substring(1);
        const title = $(this).text().trim();
        showLoading();
        navigateTo(url, title);
        updateHeader(title);
        return false;
    });

    const pages = {
        '/page1': {
            url: 'index/link.html',
            title: 'MIPAY-链接'
        },
        '/page2': {
            url: 'index/image.html',
            title: 'MIPAY-图片'
        },
        '/page3': {
            url: 'index/Quotes.html',
            title: 'MIPAY-语录'
        }
    };

    const updateHeader = (title)=>{
        headerTitle.text(title);
    }
    ;

    const loadPage = (url,title)=>{
        $.get(url, (data)=>{
            bodyContent.html(data);
            if (element) {
                element.render();
            } else {
                console.error('Layui element is not properly initialized');
            }
            document.title = title;
            // Hide loading spinner after a delay of 1 second (1000 milliseconds)
            setTimeout(hideLoading, 1000);
        }
        ).fail(()=>{
            hideLoading();
            console.error('Failed to load page:', url);
        }
        );
    }
    ;

    const showLoading = ()=>{
        loading.show();
    }
    ;

    const hideLoading = ()=>{
        loading.hide();
    }
    ;

    const loadInitialPage = ()=>{
        const hash = window.location.hash.substring(1);
        const {url, title} = pages[hash] || pages['/page1'];
        loadPage(url, title);
    }
    ;

    loadInitialPage();
    window.addEventListener('hashchange', loadInitialPage);

    const navigateTo = (url,title)=>{
        window.location.hash = url;
    }
    ;
}
);
