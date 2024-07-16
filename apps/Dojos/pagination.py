from rest_framework.pagination import PageNumberPagination


class SmallSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 7
    page_size_query_param = 'page_size'
    max_page_size = 7


class MediumSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 14
    page_size_query_param = 'page_size'
    max_page_size = 14


class LargeSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 21
    page_size_query_param = 'page_size'
    max_page_size = 21
    
class HugeSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 28
    page_size_query_param = 'page_size'
    max_page_size = 28
    
class ExtraHugeSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 35  
    page_size_query_param = 'page_size'
    max_page_size = 35  
    
class AdminSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 100