from rest_framework.pagination import PageNumberPagination


class SmallSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 3
    page_size_query_param = 'page_size'
    max_page_size = 3


class MediumSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 9
    page_size_query_param = 'page_size'
    max_page_size = 9


class LargeSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 18
    page_size_query_param = 'page_size'
    max_page_size = 18
    
class HugeSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 30
    page_size_query_param = 'page_size'
    max_page_size = 30
    
class ExtraHugeSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 60
    page_size_query_param = 'page_size'
    max_page_size = 60
    
class AdminSetPagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 100