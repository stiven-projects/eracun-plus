package hr.stiven.eracunplus.rest.model;

public record TableDataRequest(Integer page, Integer pageSize, String field, String sort) {

}
